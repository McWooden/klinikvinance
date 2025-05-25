"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  MapPin,
} from "lucide-react";

interface LocationData {
  id: string;
  name: string;
  address: string;
  hours: string;
  imageSrc: string;
  mapEmbedUrl: string;
  mapInfoDesktop: {
    title: string;
    addressLines: string[];
    hours: string;
  };
}

function extractLocationFromEmbed(embedLink: string): string | null {
  try {
    const url = new URL(embedLink);
    const pb = url.searchParams.get("pb");

    if (!pb) {
      console.error("Parameter 'pb' tidak ditemukan dalam link embed.");
      return null;
    }

    let lat: string | null = null;
    let lng: string | null = null;
    let zoom: string = "15"; // Default zoom if not explicitly found
    let cid: string | null = null;
    let hl: string = "id"; // Default language
    let gl: string = "ID"; // Default region

    // Extract latitude from !3d
    const latMatch = pb.match(/!3d(-?\d+\.\d+)/);
    if (latMatch && latMatch[1]) {
      lat = parseFloat(latMatch[1]).toFixed(6); // Standard precision for lat/lng
    }

    // Extract longitude from !2d
    const lngMatch = pb.match(/!2d(-?\d+\.\d+)/);
    if (lngMatch && lngMatch[1]) {
      lng = lngMatch[1];
    }

    // Extract zoom from !1z if present, otherwise default to 15
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

    // Construct the output URL
    const outputBaseUrl = "https://maps.google.com/maps";
    const params = new URLSearchParams();

    if (lat && lng) {
      params.set("ll", `${lat},${lng}`);
    } else if (!cid) {
      console.warn(
        "Tidak dapat mengekstrak latitude/longitude, dan CID tidak ditemukan. Link peta mungkin tidak terpusat."
      );
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
      console.error(
        "CID maupun koordinat tidak dapat diekstrak. Tidak dapat membentuk link peta yang valid."
      );
      return null;
    }

    return `${outputBaseUrl}?${params.toString()}`;
  } catch (error) {
    console.error("Terjadi kesalahan saat memproses link embed:", error);
    if (error instanceof TypeError && error.message.includes("Invalid URL")) {
      console.error("String embedLink yang diberikan bukan URL yang valid.");
    }
    return null;
  }
}

// --- DATA LOKASI (HARUSNYA DIIMPOR ATAU DARI PROPS) ---
// Saya salin di sini untuk kemudahan, tapi sebaiknya di file terpisah
const locationsData: LocationData[] = [
  {
    id: "kudus",
    name: "Venice Kudus",
    address:
      "Jl. Kutilang No.28, Magersari, Panjunan, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59318",
    hours: "10AM-9PM",
    imageSrc: "/image/location/kudus.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7923.3278087622975!2d110.83498737771!3d-6.810673300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c5c6db9c2b7d%3A0x72db5bd6a8b7dd46!2sVenice%20Aesthetic%20Clinic!5e0!3m2!1sid!2sid!4v1747911901024!5m2!1sid!2sid",
    mapInfoDesktop: {
      title: "Venice Kudus",
      addressLines: [
        "Jl. Kutilang No.28, Magersari, Panjunan,",
        "Kec. Kota Kudus, Kabupaten Kudus,",
        "Jawa Tengah 59318",
      ],
      hours: "10AM-9PM",
    },
  },
  {
    id: "tebet",
    name: "Venice Tebet",
    address:
      "Jl. Tebet Raya No.180, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, DKI Jakarta 12810",
    hours: "10AM-9PM",
    imageSrc: "/image/location/tebet.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.255374517156!2d106.8506237!3d-6.230025599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f35f5ba8be77%3A0xebbaae2cbb435ea0!2sKlinik%20Venice%20Tebet!5e0!3m2!1sid!2sid!4v1747911696153!5m2!1sid!2sid",
    mapInfoDesktop: {
      title: "Venice Tebet",
      addressLines: [
        "Jl. Tebet Raya No.180, Tebet Bar., Kec. Tebet,",
        "Kota Jakarta Selatan, DKI Jakarta 12810",
      ],
      hours: "10AM-9PM",
    },
  },
  {
    id: "salatiga",
    name: "Venice Salatiga",
    address:
      "Jl. Imam Bonjol No.30, Sidorejo Lor, Kec. Sidorejo, Kota Salatiga, Jawa Tengah 50714",
    hours: "10AM-9PM",
    imageSrc: "/image/location/salatiga.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3027863244765!2d110.49080877415982!3d-7.3198452926882505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7841be4382f3%3A0x30f74f96afe789ed!2sJl.%20Imam%20Bonjol%20No.30%2C%20Sidorejo%20Lor%2C%20Kec.%20Sidorejo%2C%20Kota%20Salatiga%2C%20Jawa%20Tengah%2050714!5e0!3m2!1sid!2sid!4v1747911131887!5m2!1sid!2sid",
    mapInfoDesktop: {
      title: "Venice Salatiga",
      addressLines: [
        "Jl. Imam Bonjol No.30, Sidorejo Lor,",
        "Kec. Sidorejo, Kota Salatiga, Jawa Tengah 50714",
      ],
      hours: "10AM-9PM",
    },
  },
];
// --- END DATA LOKASI ---

export default function Location() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const selectedLocation = locationsData[selectedLocationIndex];
  const [readMoreLink, setReadMoreLink] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Untuk scroll desktop

  useEffect(() => {
    const linkFromEmbed =
      extractLocationFromEmbed(
        locationsData[selectedLocationIndex].mapEmbedUrl
      ) || "https://maps.google.com/maps";
    setReadMoreLink(linkFromEmbed);
  }, [selectedLocationIndex]);

  const handleSelectLocation = (index: number) => {
    setSelectedLocationIndex(index);
  };

  const navigateLocation = (direction: "prev" | "next") => {
    setSelectedLocationIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? locationsData.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === locationsData.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const scrollDesktopList = (direction: "up" | "down") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Sesuaikan jarak scroll
      scrollContainerRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50 w-full">
      <div className="container mx-auto px-4 md:px-28">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-8 md:mb-12 text-center">
          Get The Closest Location
        </h2>

        {/* Layout Mobile */}
        <div className="md:hidden">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-4">
            <iframe
              key={selectedLocation.id} // Ganti key agar iframe reload saat src berubah
              src={selectedLocation.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Peta ${selectedLocation.name}`}
            ></iframe>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateLocation("prev")}
              aria-label="Lokasi Sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateLocation("next")}
              aria-label="Lokasi Berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex overflow-x-auto space-x-3 pb-4 px-4 snap-x snap-mandatory scroll-pl-4">
            {locationsData.map((location, index) => (
              <Card
                key={location.id}
                className={`min-w-[280px] w-[280px] border-0 flex-shrink-0 snap-center ${
                  selectedLocationIndex === index ? "bg-[#F1F9F4]" : "bg-white"
                } cursor-pointer hover:shadow-lg transition-shadow`}
                onClick={() => handleSelectLocation(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={location.imageSrc}
                        alt={`Gambar ${location.name}`}
                        fill
                        sizes="256px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-zinc-800 mb-1">
                        {location.name}
                      </h3>
                      <p className="text-xs text-zinc-600 mb-1 leading-tight">
                        {location.address}
                      </p>
                      <p className="text-xs font-medium text-[#547d5e]">
                        {location.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Layout Desktop */}
        <div className="hidden md:flex md:space-x-8">
          {/* Kolom Daftar Lokasi */}
          <div className="w-1/3 lg:w-1/4 space-y-3">
            <div
              ref={scrollContainerRef}
              className="max-h-[500px] lg:max-h-[600px] overflow-y-auto space-y-3 p-1 custom-scrollbar"
            >
              {locationsData.map((location, index) => (
                <Card
                  key={location.id}
                  className={`cursor-pointer border-0 hover:shadow-lg transition-all duration-200 ${
                    selectedLocationIndex === index
                      ? "bg-[#F1F9F4] scale-[1.02]"
                      : "bg-white"
                  }`}
                  onClick={() => handleSelectLocation(index)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-3">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={location.imageSrc}
                          alt={`Gambar ${location.name}`}
                          fill
                          sizes="256px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-zinc-800 mb-0.5">
                          {location.name}
                        </h3>
                        <p className="text-xs text-zinc-600 mb-0.5 leading-tight">
                          {location.address}
                        </p>
                        <p className="text-xs font-medium text-[#547d5e]">
                          {location.hours}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Tombol scroll hanya jika item lebih banyak dari yang bisa ditampilkan (opsional) */}
            {locationsData.length > 3 && ( // Tampilkan jika ada lebih dari 3 item, contoh
              <div className="flex justify-center space-x-2 mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollDesktopList("up")}
                  aria-label="Scroll ke Atas"
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => scrollDesktopList("down")}
                  aria-label="Scroll ke Bawah"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          {/* Kolom Peta */}
          <div className="w-2/3 lg:w-3/4 relative">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg">
              <iframe
                key={selectedLocation.id + "-desktop"} // Ganti key agar iframe reload
                src={selectedLocation.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Peta ${selectedLocation.name} Desktop`}
              ></iframe>
            </div>
            {/* Pop-up Info di atas Peta untuk Desktop */}
            {selectedLocation.mapInfoDesktop && (
              <div className="absolute top-2 left-2 z-10">
                <Card className="bg-white/95 backdrop-blur-sm shadow-xl w-80 max-w-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="relative w-14 h-14 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={selectedLocation.imageSrc}
                          alt={`Gambar ${selectedLocation.mapInfoDesktop.title}`}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-zinc-900">
                          {selectedLocation.mapInfoDesktop.title}
                        </h4>
                        {selectedLocation.mapInfoDesktop.addressLines.map(
                          (line, i) => (
                            <p
                              key={i}
                              className="text-xs text-zinc-700 leading-tight"
                            >
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-[#547d5e] mb-3">
                      {selectedLocation.mapInfoDesktop.hours}
                    </p>
                    <a href={readMoreLink}>
                      <Button className="w-full cursor-pointer bg-[#547d5e] hover:bg-[#4a6b53] text-white">
                        Selengkapnya
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
