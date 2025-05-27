// components/BadgeTelepon.tsx
import React from "react";

interface BadgeTeleponProps {
  width?: number | string;
  height?: number | string;
  className?: string; // opsional, kalau mau pakai Tailwind
}

const BadgeTelepon: React.FC<BadgeTeleponProps> = ({
  width = 40,
  height = 41,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        y="0.751953"
        width="40"
        height="40"
        fill="url(#pattern0_2910_2232)"
      />
      <defs>
        <pattern
          id="pattern0_2910_2232"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_2910_2232" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_2910_2232"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default BadgeTelepon;
