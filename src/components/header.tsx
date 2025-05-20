"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose, // Import SheetClose untuk menutup sheet setelah klik link jika diperlukan
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import BadgeObat from "./ui/BadgeObat";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Services" }, // Tetap "Services" seperti kode awal, atau "Service" seperti di gambar
    { href: "/about-us", label: "About us" }, // "About us" di gambar lowercase
    { href: "/get-in-touch", label: "Get in Touch" }, // Menggantikan "How It Works"
  ];

  return (
    <header className="sticky top-0 bg-white z-50 w-full">
      <div className="container mx-auto px-4 py-3 relative">
        {" "}
        {/* Mungkin py-2 untuk lebih ramping */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/image/logo.png" // Pastikan path logo benar
              alt="Venice Clinic"
              width={156} // Disesuaikan agar tidak terlalu besar di mobile
              height={156} // Disesuaikan
              // className="h-10 md:h-12 lg:h-16 w-auto" // Tinggi responsif, h-10 setara 2.5rem
            />
          </Link>

          {/* Navigasi Desktop */}
          {/* <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center"> */}
          <nav className="hidden md:flex gap-[40px] items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-base lg:text-lg hover:text-[#417f5a] transition-colors",
                  // Untuk link anchor, pathname tidak akan cocok kecuali jika Anda handle scroll-to-ID secara berbeda
                  pathname === link.href && link.href.startsWith("/")
                    ? "text-[#417f5a] font-semibold"
                    : "text-gray-300" // Warna abu-abu sedikit lebih gelap untuk kontras
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              asChild
              variant="secondary" // Mungkin buat variant custom atau style langsung
              className="bg-[#4E8966] hover:bg-[#417f5a] text-white font-semibold text-base lg:text-lg rounded-full transition-colors"
            >
              <a href="#contact" className="py-8 px-8">
                <span>
                  <BadgeObat width={24} className="size-[unset]" />
                </span>
                <span className="text-[18px]">Contact Us</span>
              </a>
            </Button>
          </div>

          {/* Tombol Menu Mobile & Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="text-gray-700 size-8" size={46} />{" "}
                  {/* Ukuran ikon disesuaikan */}
                </Button>
              </SheetTrigger>
              <SheetTitle></SheetTitle>
              <SheetContent
                side="right"
                className="w-full max-w-xs sm:max-w-sm p-6 bg-white"
              >
                {" "}
                {/* Padding di SheetContent */}
                {/* SheetHeader, SheetTitle, SheetDescription dihapus */}
                <nav className="flex flex-col space-y-3 mt-6">
                  {" "}
                  {/* mt-6 untuk spasi dari atas sheet */}
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block text-lg hover:text-[#417f5a] transition-colors py-2",
                          pathname === link.href && link.href.startsWith("/")
                            ? "text-[#417f5a] font-semibold" // Aktif lebih tebal
                            : "text-gray-400" // Warna abu-abu untuk non-aktif
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full bg-[#4E8966] hover:bg-[#417f5a] text-white font-semibold text-lg mt-4 py-3 rounded-full transition-colors"
                    >
                      <a href="#contact" className="py-8">
                        Contact us
                      </a>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
