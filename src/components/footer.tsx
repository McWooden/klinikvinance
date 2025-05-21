import "../app/globals.css";

import {
  Youtube,
  Instagram,
  MessageCircle,
  Award,
  Briefcase,
  Hospital,
  Phone,
  Copyright,
} from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const logoPath = "/image/logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full",
        "bg-[#2A3C30]",
        "text-gray-200",
        "py-12 px-4 lg:px-8 lg:px-16"
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:space-y-0 order-last lg:order-first flex flex-col items-center text-center">
            <div>
              <Image
                src={logoPath}
                alt="Venice Aesthetic Clinic Logo"
                width={235}
                height={78}
                className="object-contain h-auto"
              />
            </div>

            <div className="flex space-y-6 space-x-8 lg:space-y-4">
              <a
                href="#"
                aria-label="Venice Clinic YouTube"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Youtube size={36} />
              </a>
              <a
                href="#"
                aria-label="Venice Clinic Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram size={36} />
              </a>
              <a
                href="#"
                aria-label="Venice Clinic WhatsApp"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <MessageCircle size={36} />
              </a>
            </div>
            <div className="border space-y-6 lg:space-y-4 border-gray-500 rounded-md p-3 flex items-center space-x-2 w-full max-w-[280px] lg:max-w-xs">
              <Award size={36} className="text-yellow-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">
                Indonesia's Leading Certified Clinic
              </span>
            </div>
          </div>

          <div className="space-y-3 order-1 lg:order-2">
            <div className="flex items-center space-x-2 mb-1">
              <Briefcase
                size={20}
                className="text-gray-400 hidden lg:inline-block"
              />
              <h3 className="text-lg font-semibold text-white">Company Info</h3>
            </div>
            <ul className="space-y-2 text-sm">
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

          <div className="space-y-3 order-2 lg:order-3">
            <div className="flex items-center space-x-2 mb-1">
              <Hospital
                size={20}
                className="text-gray-400 hidden lg:inline-block"
              />
              <h3 className="text-lg font-semibold text-white">Cabang</h3>
            </div>
            <ul className="space-y-2 text-sm">
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
                  Surabaya
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
            </ul>
          </div>

          <div className="space-y-3 order-3 lg:order-4">
            <div className="flex items-center space-x-2 mb-1">
              <Phone
                size={20}
                className="text-gray-400 hidden lg:inline-block"
              />
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            </div>
            <ul className="space-y-2 text-sm">
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

        <div className="text-sm text-center text-gray-400 pt-8">
          Copyright{" "}
          <Copyright size={14} className="inline-block align-text-bottom" />{" "}
          {currentYear} Venice Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
