"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"; // Sesuaikan path jika berbeda
import { Star } from "lucide-react"; // Untuk ikon bintang

// Definisikan tipe untuk data testimoni
interface Testimonial {
  id: number;
  quote: string;
  imageSrc: string;
  clientName: string;
  clientTitle: string;
  rating: number;
}

// Data testimoni (sesuaikan dengan konten Anda)
const testimonialData: Testimonial[] = [
  {
    id: 1,
    quote:
      "As someone always on the go, I need to look fresh and vibrant at all times. The Botox treatment here erased years of stress from my face, and I've never felt more confident in my professional meetings!",
    imageSrc: "/image/testimoni/image (1).png",
    clientName: "Anya Geraldine",
    clientTitle: "CEO of Business",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The thread lift was a game-changer for me! It gave me a naturally lifted look without downtime, perfect for my busy photoshoot schedule. This clinic truly understands aesthetics.",
    imageSrc: "/image/testimoni/image (2).png",
    clientName: "Luna Maya",
    clientTitle: "Fashion Model",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "As a public figure, my appearance matters both on and off the field. The rhinoplasty procedure gave me a refined look without altering my unique features. I couldn't be happier!",
    imageSrc: "/image/testimoni/image (3).png",
    clientName: "Pevita Pearce",
    clientTitle: "Professional Makeup Artist",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "As a fellow practitioner, I was impressed by the precision and care provided here. Their minoplasty technique is nothing short of artistry—highly recommended to anyone seeking expert hands.",
    imageSrc: "/image/testimoni/image (4).png",
    clientName: "Raisa Andriana",
    clientTitle: "Plastic Surgeon",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Aging gracefully doesn't mean doing nothing. The filler treatment gave me a youthful glow while maintaining my natural features. Clients often compliment my rejuvenated look!",
    imageSrc: "/image/testimoni/image (5).png",
    clientName: "Chelsea Islan",
    clientTitle: "Marketing Executive",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "This clinic is a hidden gem! Their expertise in facial contouring through fillers is unmatched. My clients have even commented on how perfectly balanced my face looks now.",
    imageSrc: "/image/testimoni/image (6).png",
    clientName: "Isyana Sarasvati",
    clientTitle: "Social Media Influencer",
    rating: 5,
  },
];

const TestimonialCard: React.FC<Omit<Testimonial, "id">> = ({
  quote,
  imageSrc,
  clientName,
  clientTitle,
  rating,
}) => {
  return (
    <div className="bg-white p-6 shadow shadow-black/35 rounded-3xl flex flex-col h-full">
      <p className="text-black text-[13px] mb-6 leading-5 flex-grow">
        “{quote}”
      </p>
      {/* Kontainer untuk info klien dan rating */}
      <div className="mt-auto flex items-center space-x-3">
        {" "}
        {/* space-x untuk jarak antar gambar dan teks */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
          <Image
            src={imageSrc}
            alt={clientName}
            fill
            sizes="54px"
            className="object-cover"
          />
        </div>
        <div className="flex-grow">
          {/* Bintang Rating */}
          <div className="flex items-center gap-0.5 ml-2 mb-2">
            {" "}
            {/* Sedikit margin bawah untuk bintang */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    // Ukuran bintang bisa disesuaikan, misal w-4 h-4 atau w-5 h-5
                    i < rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
          </div>
          {/* Nama dan Jabatan */}
          <p className="font-semibold ml-2 text-green-600/35 text-lg leading-tight">
            {clientName}
          </p>
          <p className="text-sm font-bold ml-2 text-blue-900/55 mt-2 leading-tight">
            {clientTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  const [, setApi] = useState<CarouselApi>();

  return (
    <section className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 text-center">
          Testimonials by Patients
        </h2>
        <p className="text-sm md:text-base text-[#447759] mx-auto mb-8 md:mb-12 w-full text-center">
          Testimony from our 5000+ patients, lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Praesent velit arcu, venenatis eget
          vulputate vel.
        </p>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid  md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Mobile View: Carousel */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start", // Memastikan item pertama rata kiri
              loop: false, // Bisa true jika diinginkan
              // slidesToScroll: 1, // Ini defaultnya
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {" "}
              {/* Standar shadcn untuk offset */}
              {testimonialData.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  // basis-[85%] berarti item utama mengambil 85% lebar,
                  // menyisakan 15% untuk preview item berikutnya (kurang lebih).
                  // Sesuaikan nilai ini (misal 80%, 90%) untuk efek yang diinginkan.
                  // pl-4 adalah standar shadcn untuk spacing antar item.
                  className="pl-4 basis-[85%] sm:basis-[80%]"
                >
                  <div className="p-1 h-full">
                    {" "}
                    {/* Padding agar border tidak terpotong */}
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Tidak ada CarouselPrevious dan CarouselNext */}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
