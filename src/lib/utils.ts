import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractLocationFromEmbed(embedLink: string): string | null {
  try {
    const url = new URL(embedLink);
    const pb = url.searchParams.get("pb");

    if (!pb) {
      console.error("pb not found");
      return null;
    }

    const options = {
      lat: null,
      lng: null,
      zoom: "15",
      cid: null,
      hl: "id",
      gl: "ID",
    };
    let lat: string | null = null;
    let lng: string | null = null;
    let zoom: string = "15"; // Default zoom
    let cid: string | null = null;
    let hl: string = "id"; // Default language
    let gl: string = "ID"; // Default region

    // Extract latitude from !3d
    const latMatch = pb.match(/!3d(-?\d+\.\d+)/);
    if (latMatch && latMatch[1]) {
      lat = parseFloat(latMatch[1]).toFixed(6);
    }

    // Extract longitude from !2d
    const lngMatch = pb.match(/!2d(-?\d+\.\d+)/);
    if (lngMatch && lngMatch[1]) {
      lng = lngMatch[1];
    }

    // Extract zoom from !1z (default = 15)
    const zoomMatchPb = pb.match(/!1z(\d+)/);
    if (zoomMatchPb && zoomMatchPb[1]) {
      zoom = zoomMatchPb[1];
    }

    // Extract Place ID (CID) from !1s...%3A(0xHEX)...
    const cidHexMatch = pb.match(
      /!1s(?:0x[0-9a-fA-F]+(?:%3A|:))?(0x[0-9a-fA-F]+)!/
    );
    if (cidHexMatch && cidHexMatch[1]) {
      const hexId = cidHexMatch[1].startsWith("0x")
        ? cidHexMatch[1]
        : `0x${cidHexMatch[1]}`;
      cid = BigInt(hexId).toString();
    }

    // Extract language (hl) and region (gl) from !3m2 or !5m2 blocks
    const langRegionRegex = /!(?:3m2|5m2)!1s([a-zA-Z]{2})!2s([a-zA-Z]{2,})/g;
    let lastLangMatch: RegExpExecArray | null = null;
    let currentLangMatch: RegExpExecArray | null;
    while ((currentLangMatch = langRegionRegex.exec(pb)) !== null) {
      lastLangMatch = currentLangMatch;
    }

    if (lastLangMatch) {
      hl = lastLangMatch[1].toLowerCase();
      gl = lastLangMatch[2].toUpperCase();
    }

    const outputBaseUrl = "https://maps.google.com/maps";
    const params = new URLSearchParams();

    if (lat && lng) {
      params.set("ll", `${lat},${lng}`);
    } else if (!cid) {
      console.warn("Failed extract latitude/longitude, CID not found.");
    }

    // Set zoom only if location (ll or cid) is available
    if ((lat && lng) || cid) {
      params.set("z", zoom);
    }

    params.set("t", "m"); // Map type: 'm' for standard map
    if (hl) params.set("hl", hl);
    if (gl) params.set("gl", gl);
    params.set("mapclient", "embed");

    if (cid) {
      params.set("cid", cid);
    } else if (!(lat && lng)) {
      console.error("CID = null");
      return null;
    }

    return `${outputBaseUrl}?${params.toString()}`;
  } catch (error) {
    console.error("Error:", error);
    if (error instanceof TypeError && error.message.includes("Invalid URL")) {
      console.error("Invalid URL.");
    }
    return null;
  }
}
