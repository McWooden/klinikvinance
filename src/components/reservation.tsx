// src/app/components/Reservation.tsx (atau di mana pun Anda meletakkannya)
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Sesuaikan path jika berbeda
import BadgeWhatsapp from "./BadgeWhatsapp";

export default function Reservation() {
  return (
    <section className="py-12 px-4 md:py-16 lg:py-20 lg:px-28">
      <div className="container mx-auto lg:px-4 bg-[#89CDA6] rounded-2xl ">
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-10 xl:gap-16 p-6 pb-0 md:p-8 lg:p-0 rounded-2xl md:rounded-3xl lg:rounded-none lg:bg-transparent">
          {/* Kolom Kanan: Teks, CTA, dan Tag Layanan (Desktop) */}
          <div className="lg:w-7/12 xl:w-[55%] lg:order-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 md:mb-5 leading-tight">
              Reserve Our Service Now.{" "}
              <br className="hidden sm:inline lg:hidden xl:inline" />
              Limited Seat!
            </h2>
            <p className="text-slate-800 mb-8 md:mb-10 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Book a complimentary, commitment-free consultation to determine if
              we can help you get the results you want.
            </p>

            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-full text-lg shadow-md transition-transform duration-150 hover:scale-105 focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#89CDA6]"
              // onClick={() => { /* Logika ketika tombol diklik */ }}
            >
              <span>
                <BadgeWhatsapp className="mr-2.5 w-6 aspect-square size-[unset]" />
              </span>
              Contact Us
            </Button>

            {/* Tag Layanan - Hanya tampil di Desktop (lg ke atas) */}
            <div className="mt-10 hidden lg:block">
              <Image
                src="/image/reservation/res-frame.png"
                alt="Pilihan treatment: Acne Treatment, Slimming Treatment, Eye Treatment, Breastcare Treatment"
                width={580} // Sesuaikan dengan dimensi asli gambar Anda
                height={85} // Sesuaikan dengan dimensi asli gambar Anda
                className="max-w-full h-auto object-contain mx-auto lg:mx-0"
              />
            </div>
          </div>

          {/* Kolom Kiri: Gambar Utama (termasuk badge) */}
          <div className="mt-8 lg:mt-0 lg:w-5/12 xl:w-[45%] lg:order-0 lg:scale-90 lg:origin-bottom flex justify-center lg:justify-start">
            <Image
              src="/image/reservation/reservation.png"
              alt="Konsultasi layanan kecantikan terpercaya dan bersertifikat"
              width={580} // Sesuaikan dengan dimensi asli gambar Anda untuk rasio aspek yang benar
              height={550} // Sesuaikan dengan dimensi asli gambar Anda
              className="max-w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
