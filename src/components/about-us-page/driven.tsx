"use client";

import React from "react";
import { HeartPulse, Pill, Syringe } from "lucide-react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col px-2">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100/70 dark:bg-emerald-800/30 sm:h-20 sm:w-20">
        <div className="text-emerald-600 dark:text-emerald-400">
          {icon}{" "}
          {/* Sekarang 'icon' adalah satu node (Fragment yang berisi dua ikon) */}
        </div>
      </div>
      <h3 className="mb-2.5 text-lg font-semibold text-slate-800 dark:text-slate-100 sm:text-xl md:text-[22px] leading-tight">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed sm:text-base">
        {description}
      </p>
    </div>
  );
};

const features: FeatureItemProps[] = [
  {
    // Dibungkus dengan React Fragment
    icon: (
      <>
        <HeartPulse size={32} className="sm:hidden" />
        <HeartPulse size={36} className="hidden sm:inline" />
      </>
    ),
    title: "People's No.1 Choice for Skin Clinic",
    description:
      "People's choice with lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit arcu, venenatis eget vulputate vel, condimentum id dui.",
  },
  {
    // Dibungkus dengan React Fragment
    icon: (
      <>
        <Pill size={32} className="sm:hidden" />
        <Pill size={36} className="hidden sm:inline" />
      </>
    ),
    title: "Modern Technology with The Best Facility",
    description:
      "Modern technology with lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit arcu, venenatis eget vulputate vel, condimentum id dui.",
  },
  {
    // Dibungkus dengan React Fragment
    icon: (
      <>
        <Syringe size={32} className="sm:hidden" />
        <Syringe size={36} className="hidden sm:inline" />
      </>
    ),
    title: "Certified Doctors, Trusted by Clients",
    description:
      "Certified doctors with lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit arcu, venenatis eget vulputate vel, condimentum id dui.",
  },
];

export default function DrivenBySection() {
  return (
    <section className="dark:bg-slate-950 px-5">
      <div className="max-w-[1180px] mx-auto">
        <div className="mx-auto mb-12 text-center md:mb-16 lg:mb-20">
          <h2
            className="text-[24px] font-bold text-slate-800 dark:text-slate-100 
            lg:text-[36px] lg:leading-tight"
          >
            We Are Driven with What Set Us Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-12 md:grid-cols-3 md:gap-y-16 lg:gap-x-10 xl:gap-x-12">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
