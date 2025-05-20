import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import Image from "next/image";
import BadgeObat from "./ui/BadgeObat";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="container mx-auto md:px-4">
      <div className="flex flex-col justify-between md:flex-row items-center">
        <HeroText className="hidden md:block" />
        <HeroImage />
      </div>
      <div className="relative">
        <HeroTextBox className="absolute -top-30 z-20 py-4 px-2 md:hidden" />
        <HeroText
          className="md:hidden px-5 py-10 
        bg-[#F1F9F4] rounded-t-3xl text-center -mt-5 relative z-10"
        />
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full max-w-[453px] mx-auto overflow-x-hidden">
      {/* Background Image */}
      <Image
        src="/image/hero/hero-bg.png"
        width={453}
        height={552}
        alt="Background Image"
        className="w-full h-auto"
      />

      {/* Foreground Image (centered bottom overlay) */}
      <Image
        src="/image/hero/hero-person.png"
        width={517}
        height={521}
        alt="Skin Treatment"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 sm:max-w-full max-w-[120%]"
      />
    </div>
  );
}

interface TextProps {
  className?: string;
}

function HeroText({ className }: TextProps) {
  return (
    <div className={`relative max-w-lg ${className}`}>
      <div className="mb-8 md:text-4xl text-5xl font-semibold">
        Rejuve Mate Your Life, Elevate Your Confidence
      </div>
      <div className="text-md text-[#006828] md:w-full dark:text-gray-400 mb-8">
        Menjadi perusahaan kecantikan terkemuka yang menciptakan indah dalam
        kehidupan wanita melalui produk dan layanan kecantikan yang tulus dan
        terpercaya.
      </div>
      <Button className="md:px-20 w-full md:w-auto md:py-6 md:text-lg py-8 text-xl rounded-full">
        {" "}
        <span>
          <BadgeObat width={24} className="size-[unset]" />
        </span>
        See Service
      </Button>
      <HeroTextBox className="hidden md:flex" />
    </div>
  );
}

interface TextBoxProps {
  className?: string;
}

function HeroTextBox({ className }: TextBoxProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[553px] md:max-w-md md:justify-start max-h-[103px] flex justify-center",
        "gap-4 md:gap-4 mx-auto md:mx-0 mt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 p-4 order-1 md:order-0 rounded-lg bg-white/30 backdrop-blur-sm border border-gray-300/50 bg-clip-padding w-full md:w-auto">
        <h3 className="text-3xl md:text-3xl font-bold text-primary">50k</h3>
        <p className="text-lg md:text-base font-bold text-gray-800">
          Trusted Clients
        </p>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-lg bg-white/30 backdrop-blur-sm border border-gray-300/50 bg-clip-padding w-full md:w-auto">
        <h3 className="text-3xl md:text-3xl font-bold text-primary">10+</h3>
        <p className="text-lg md:text-base font-bold text-gray-800">
          Years of Experience
        </p>
      </div>
    </div>
  );
}
