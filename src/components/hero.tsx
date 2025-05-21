import { Button } from "@/components/ui/button";
import Image from "next/image";
import BadgeObat from "./ui/BadgeObat";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="container mx-auto max-w-[1180px] lg:px-4">
      <div className="flex flex-col justify-between lg:flex-row items-center">
        <HeroText className="hidden lg:block" />
        <HeroImage />
        {/* <HeroTextBox className="mx-auto left-1/2 transform -translate-x-1/2 bottom-[18px] z-20 py-4 px-2 lg:hidden" /> */}
        <div className="relative">
          <HeroTextBox className="absolute bottom-[0px] z-20 py-4 px-2 w-[unset] lg:hidden" />
        </div>
      </div>
      <div className="relative pt-5 lg:pt-[unset]">
        {/* <HeroTextBox className="absolute left-1/2 transform -translate-x-1/2 -top-34 z-20 py-4 px-2 lg:hidden" /> */}
        <HeroText className="lg:hidden px-5 py-10 mx-auto bg-[#F1F9F4] rounded-t-2xl text-center -mt-8 relative z-10" />
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative w-full lg:mr-20 overflow-hidden flex justify-center">
      {/* Background Image */}
      <Image
        src="/image/hero/hero-bg.png"
        width={453}
        height={552}
        alt="Background Image"
        className="w-full h-auto max-w-[453px]"
      />

      {/* Foreground Image */}
      <div className="absolute bottom-0 w-[120%] max-w-none">
        <Image
          src="/image/hero/hero-person.png"
          width={517}
          height={521}
          alt="Skin Treatment"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

interface TextProps {
  className?: string;
}

function HeroText({ className }: TextProps) {
  return (
    <div className={`relative max-w-lg ${className}`}>
      <div className="mb-8 lg:text-4xl text-3xl font-semibold">
        Rejuve Mate Your Life, Elevate Your Confidence
      </div>
      <div className="text-sm text-[#006828] lg:w-full dark:text-gray-400 mb-8">
        Menjadi perusahaan kecantikan terkemuka yang menciptakan indah dalam
        kehidupan wanita melalui produk dan layanan kecantikan yang tulus dan
        terpercaya.
      </div>
      <Button className="lg:px-20 w-full lg:w-auto lg:py-6 lg:text-lg py-8 text-xl rounded-full">
        {" "}
        <span>
          <BadgeObat width={24} className="size-[unset]" />
        </span>
        See Service
      </Button>
      <HeroTextBox className="hidden lg:flex" />
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
        "w-full max-w-[553px] lg:max-w-md lg:justify-start max-h-[103px] flex justify-center",
        "gap-2 lg:gap-4 mx-auto lg:mx-0 mt-6 p-4 lg:p-6",
        className
      )}
    >
      <div className="flex items-center gap-2 p-4 order-1 lg:order-0 rounded-lg bg-white/30 backdrop-blur-sm border border-gray-300/50 bg-clip-padding w-full max-w-[283px] lg:w-auto">
        <h3 className="text-xl lg:text-3xl font-bold text-primary">50k</h3>
        <p className="text-sm lg:text-base font-bold text-gray-800">
          Trusted Clients
        </p>
      </div>

      <div className="flex items-center gap-2 p-4 rounded-lg bg-white/30 backdrop-blur-sm border border-gray-300/50 bg-clip-padding w-full max-w-[283px] lg:w-auto">
        <h3 className="text-xl lg:text-3xl font-bold text-primary">10+</h3>
        <p className="text-sm lg:text-base font-bold text-gray-800">
          Years of Experience
        </p>
      </div>
    </div>
  );
}
