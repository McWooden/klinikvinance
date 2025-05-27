"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import BadgeObat from "./icons/BadgeObat";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Services" },
    { href: "/about-us", label: "About us" },
    { href: "/get-in-touch", label: "Get in Touch" },
  ];

  return (
    <header className="sticky top-0 bg-white z-50 w-full">
      <div className="container mx-auto max-w-[1180px] relative">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/image/logo.png"
              alt="Venice Clinic"
              width={156}
              height={156}
            />
          </Link>

          {/* Desktop */}
          {/* <nav className="hidden lg:flex space-x-4 lg:space-x-6 items-center"> */}
          <nav className="hidden lg:flex gap-[40px] items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-base text-[20px] hover:text-[#417f5a] transition-colors",

                  pathname === link.href && link.href.startsWith("/")
                    ? "text-[#417f5a]"
                    : "text-[#ADADAD]/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button
              asChild
              variant="secondary"
              className="bg-[#4E8966] hover:bg-[#417f5a] text-white font-semibold text-base lg:text-lg rounded-full transition-colors"
            >
              <a href="#contact" className="py-7.5 px-8">
                <span>
                  <BadgeObat width={24} className="size-[unset]" />
                </span>
                <span className="text-[18px]">Contact Us</span>
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="lg:hidden mr-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="text-gray-700 size-9" size={46} />{" "}
                </Button>
              </SheetTrigger>
              <SheetTitle></SheetTitle>
              <SheetContent
                side="right"
                className="w-full max-w-xs lg:max-w-sm p-12 bg-white"
              >
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className={cn(
                          "block text-[18px] hover:text-[#417f5a] transition-colors py-2",
                          pathname === link.href && link.href.startsWith("/")
                            ? "text-[#417f5a] text-[20px] font-semibold"
                            : "text-[#ADADAD]/80"
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
                        Contact Us
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
