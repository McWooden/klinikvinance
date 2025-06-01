"use client";
import React from "react";
import Marquee from "react-fast-marquee"; // Ubah impor ke "react-fast-marquee"

interface CoreElementProps {
  title: string;
  icon: React.ReactNode;
}

const CoreElement = React.memo(({ title, icon }: CoreElementProps) => {
  return (
    <div className="flex shrink-0 items-center whitespace-nowrap p-3 text-[#1D1D1D]">
      {icon}
      <span className="ml-2 font-semibold">{title}</span>
    </div>
  );
});
CoreElement.displayName = "CoreElement";

interface RepeatTextProps {
  title: string;
  icon: React.ReactNode;
  direction?: "right" | "left";
  speed?: number; // Di react-fast-marquee, 'speed' adalah piksel per detik
  pauseOnHover?: boolean;
}

export default function RepeatTextWithReactFastMarquee({
  title,
  icon,
  speed = 50, // Default speed di react-fast-marquee adalah 50px/s. Sesuaikan jika perlu.
  direction = "right",
  pauseOnHover = true,
}: RepeatTextProps) {
  return (
    <div
      className="w-full overflow-hidden"
      role="marquee"
      aria-label={`Scrolling text: ${title}`}
    >
      <Marquee
        speed={speed}
        direction={direction}
        pauseOnHover={pauseOnHover}
        gradient={false} // Anda bisa mengatur gradient jika mau
        autoFill={true} // react-fast-marquee biasanya menangani pengisian secara otomatis
        // dengan mengkloning children jika jumlahnya kurang.
      >
        <CoreElement title={title} icon={icon} />
      </Marquee>
    </div>
  );
}
