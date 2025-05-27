import { Button } from "@/components/ui/button";
import Image from "next/image";
import BadgeObat from "./BadgeObat";
import { cn } from "@/lib/utils";

interface TextProps {
  className?: string;
}
interface TextBoxProps {
  className?: string;
}

export default function Hero() {
  return (
    <div className="container mx-auto max-w-[1180px]">
      {/* Mobile */}
      <div className="block lg:hidden">
        <HeroMobile />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </div>
  );
}

// DESKTOP
function HeroDesktop() {
  return (
    <div className="flex items-end">
      <HeroTextDesktop className="flex-grow" />
      <HeroImageDesktop />
    </div>
  );
}

function HeroImageDesktop() {
  return (
    <div className="relative w-full overflow-hidden flex justify-center max-w-[517px]">
      <Image
        src="/image/hero/hero-bg.png"
        width={453}
        height={552}
        alt="Background Image"
        className="w-full h-auto max-w-[453px]"
      />
      <div className="absolute bottom-0 max-w-none">
        <Image
          src="/image/hero/hero-person.png"
          width={517}
          height={521}
          alt="Skin Treatment"
          className=""
        />
      </div>
    </div>
  );
}

function HeroTextDesktop({ className }: TextProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="mb-8 text-5xl font-semibold">
        Rejuve Mate Your Life, Elevate Your Confidence
      </div>
      <div className="text-base text-[#447759] w-full dark:text-gray-400 mb-8">
        Menjadi perusahaan kecantikan terkemuka yang menciptakan indah dalam
        kehidupan wanita melalui produk dan layanan kecantikan yang tulus dan
        terpercaya.
      </div>
      <Button className="px-20 py-8 text-lg rounded-full">
        <span>
          <BadgeObat width={24} className="size-[unset]" />
        </span>
        See Service
      </Button>
      <HeroTextBox className="flex mt-6" />
    </div>
  );
}

// MOBILE
function HeroMobile() {
  return (
    <>
      <div className="flex flex-col items-center">
        <HeroImageMobile />
        <div className="relative">
          <HeroTextBox className="absolute left-1/2 transform -translate-x-1/2 bottom-[6px] z-20 py-4 px-2 w-[unset]" />
        </div>
      </div>
      <div className="relative pt-5 bg-tomato">
        <HeroTextMobile className="px-5 py-6 mx-auto bg-[#F1F9F4] rounded-t-2xl text-center -mt-8 relative z-10" />
      </div>
    </>
  );
}

function HeroImageMobile() {
  return (
    <div className="relative w-full overflow-hidden flex justify-center">
      <Image
        src="/image/hero/hero-bg.png"
        width={453}
        height={552}
        alt="Background Image"
        className="w-full h-auto max-w-[453px]"
      />
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

function HeroTextMobile({ className }: TextProps) {
  return (
    <div className={`relative max-w-lg ${className}`}>
      <div className="mb-8 text-3xl font-semibold">
        Rejuve Mate Your Life, Elevate Your Confidence
      </div>
      <div className="text-sm text-[#447759] mb-8 dark:text-gray-400">
        Menjadi perusahaan kecantikan terkemuka yang menciptakan indah dalam
        kehidupan wanita melalui produk dan layanan kecantikan yang tulus dan
        terpercaya.
      </div>
      <Button className="w-full py-8 text-xl rounded-full">
        <span>
          <BadgeObat width={24} className="size-[unset]" />
        </span>
        See Service
      </Button>
    </div>
  );
}

// Function helper
function HeroTextBox({ className }: TextBoxProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[553px] max-h-[103px] flex justify-center gap-2 lg:gap-4 mx-auto lg:mx-[unset] mt-6 lg:mb-14 p-4 lg:px-0",
        className
      )}
    >
      <div className="flex items-center gap-2 lg:gap-4 p-4 lg:px-8 lg:py-12 order-1 lg:order-0 rounded-lg bg-white/30 backdrop-blur-sm border border-gray-300/50 bg-clip-padding w-full max-w-[283px] lg:w-auto">
        <h3 className="text-xl lg:text-4xl font-bold text-primary">50k</h3>
        <p className="text-sm lg:text-xl font-bold text-gray-800">
          Trusted Clients
        </p>
      </div>

      <div className="flex items-center gap-2 lg:gap-4 p-4 lg:px-8 lg:py-12 rounded-lg bg-white/30 backdrop-blur-sm border border-gray-300/50 bg-clip-padding w-full max-w-[283px] lg:w-auto">
        <h3 className="text-xl lg:text-4xl font-bold text-primary">10+</h3>
        <p className="text-sm lg:text-xl font-bold text-gray-800">
          Years of Experience
        </p>
      </div>
    </div>
  );
}
