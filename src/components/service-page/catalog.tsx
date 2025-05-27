// src/components/sections/ServiceCatalog.tsx
import React from "react";
import Image from "next/image";

const ServiceCatalog = () => {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Konten Utama - Harus dirender sebelum elemen absolute agar z-index default bekerja, atau secara eksplisit diatur */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center container mx-auto max-w-[1180px]">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-slate-800">
          Our Services in A Catalog
        </h1>
        <p className="text-base max-w-lg md:max-w-xl lg:max-w-4xl text-gray-600 leading-relaxed">
          Treatment di Venice Klinik merupakan Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent velit arcu, venenatis eget
          vulputate vel, condimentum id dui.
        </p>
      </div>

      {/* Spiral Background */}
      {/* Posisikan pusat spiral di sekitar 65% dari kiri section, dan tengahkan secara vertikal. */}
      {/* Ini akan menempatkannya di kanan blok teks yang terpusat. */}
      <div
        className="absolute top-1/20 right-1/10  z-0  pointer-events-none"
        aria-hidden="true" // Baik untuk aksesibilitas karena ini dekoratif
      >
        <Image
          src="/image/servicecatalog/spiral.png" // Path dari kode Anda
          alt="Decorative Spiral Background" // Alt text lebih deskriptif untuk dekorasi
          width={300} // Ukuran dari kode Anda
          height={250}
          priority
          className="max-w-none"
        />
      </div>

      {/* Dekorasi Tanaman/Daun */}
      {/* Pojok kanan bawah sudah benar, z-0 juga sudah benar. */}
      <div
        className="absolute top-[35%] right-30 z-0 pointer-events-none md:block hidden"
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
