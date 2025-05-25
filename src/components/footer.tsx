import "../app/globals.css";

import { Copyright } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";
import BadgeBrieftcase from "./BadgeBrieftcase";
import BadgeCabang from "./BadgeCabang";
import BadgeTelepon from "./BadgeTelepon";
import BadgeInstagram from "./BadgeInstagram";
import BadgeYoutube from "./BadgeYoutube";
import BadgeWhatsapp from "./BadgeWhatsapp";
import BadgeMedali from "./BadgeMedali";

const logoPath = "/image/logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full",
        "bg-[#223429]",
        "text-gray-200",
        "py-12 px-4 lg:px-16"
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          <div className="order-last lg:order-first flex flex-col gap-[20px] items-center lg:items-start">
            <div className="max-w-[235px]">
              <Image
                src={logoPath}
                alt="Venice Aesthetic Clinic Logo"
                width={235}
                height={78}
                className="object-contain h-auto"
              />

              <div className="flex justify-evenly w-full">
                <a
                  href="#"
                  aria-label="Venice Clinic YouTube"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <BadgeYoutube width={32} height={32} />
                </a>
                <a
                  href="#"
                  aria-label="Venice Clinic Instagram"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <BadgeInstagram width={32} height={32} />
                </a>
                <a
                  href="#"
                  aria-label="Venice Clinic WhatsApp"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <BadgeWhatsapp width={32} height={32} />
                </a>
              </div>
            </div>

            <div className="border border-gray-500 rounded-md p-3 flex items-center w-full max-w-[250px]">
              {/* <Award size={36} className="text-yellow-400 flex-shrink-0" /> */}
              <BadgeMedali width={44} height={39} />
              <span className="text-[16px] text-[#ACDCC0]">
                Indonesia&apos;s Leading Certified Clinic
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[10px] mb-1">
              {/* <Briefcase
                size={40}
                className="text-gray-400 hidden lg:inline-block"
              /> */}
              <BadgeBrieftcase width={40} height={40} />
              <h3 className="text-[20px] font-semibold text-white">
                Company Info
              </h3>
            </div>
            <ul className="flex flex-col gap-[16px] text-[16px]">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[10px] mb-1">
              {/* <Hospital
                size={40}
                className="text-gray-400 hidden lg:inline-block"
              /> */}
              <BadgeCabang width={40} height={40} />
              <h3 className="text-[20px] font-semibold text-white">Cabang</h3>
            </div>
            <ul className="flex flex-col gap-[16px] text-[16px]">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Gading Serpong
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Jakarta
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Semarang
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Kudus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Salatiga
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[10px] mb-1">
              <BadgeTelepon width={40} height={40} />
              {/* <Phone
                size={40}
                className="text-gray-400 hidden lg:inline-block"
              /> */}
              <h3 className="text-[20px] font-semibold text-white">
                Contact Us
              </h3>
            </div>
            <ul className="flex flex-col gap-[16px] text-[16px]">
              <li>
                <a
                  href="tel:+626564465455"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +626564465455
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@klinik24.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  info@klinik24.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">Telp: +5646544654</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        <div className="text-[16px] text-center text-gray-400 pt-[40px]">
          Copyright{" "}
          <Copyright size={14} className="inline-block align-text-bottom" />{" "}
          {currentYear} Venice Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
