// src/components/sections/ServiceCatalog.tsx
import React from "react";
import Image from "next/image";

const ServiceCatalog = () => {
  return (
    <section className="relative w-full py-25 lg:py-37.5 overflow-hidden">
      {/* Konten Utama - Harus dirender sebelum elemen absolute agar z-index default bekerja, atau secara eksplisit diatur */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center container mx-auto max-w-[1180px]">
        <h1 className="font-bold text-[34px] lg:text-[64px] mb-4 text-slate-800">
          Our Services in A Catalog
        </h1>
        <p className="text-[12px] lg:text-[16px] max-w-lg md:max-w-xl lg:max-w-4xl text-gray-600 leading-relaxed">
          Treatment di Venice Klinik merupakan Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent velit arcu, venenatis eget
          vulputate vel, condimentum id dui.
        </p>
      </div>

      {/* Spiral Background */}
      {/* Posisikan pusat spiral di sekitar 65% dari kiri section, dan tengahkan secara vertikal. */}
      {/* Ini akan menempatkannya di kanan blok teks yang terpusat. */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          transform -translate-x-1/2 -translate-y-1/2
          lg:top-[5%] lg:right-[10%] lg:left-auto lg:translate-x-0 lg:translate-y-0
          z-0 pointer-events-none
        "
        aria-hidden="true"
      >
        <Image
          src="/image/servicecatalog/spiral.png"
          alt="Decorative Spiral Background"
          width={300}
          height={250}
          priority
          className="max-w-none"
        />
      </div>

      {/* Dekorasi Tanaman/Daun */}
      {/* Pojok kanan bawah sudah benar, z-0 juga sudah benar. */}
      <div
        className="absolute top-[35%] right-30 z-0 pointer-events-none lg:block hidden"
        aria-hidden="true" // Baik untuk aksesibilitas
      >
        <Image
          src="/image/servicecatalog/vector.png" // Path dari kode Anda
          alt="Decorative Plant Element" // Alt text lebih deskriptif untuk dekorasi
          // // 'fill' adalah pilihan yang baik di sini
          width={300}
          height={200}
          className="object-contain object-bottom-right"
          priority
        />
      </div>
    </section>
  );
};

export default ServiceCatalog;
