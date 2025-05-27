import Image from "next/image";
import { Button } from "@/components/ui/button";
import BadgeWhatsapp from "./BadgeWhatsapp";

interface ReservationProps {
  className?: string;
}

export default function Reservation({ className }: ReservationProps) {
  return (
    <section className={`mx-auto max-w-[1180px] mb-[100px] px-5 ${className}`}>
      <div className="container mx-auto lg:px-4 bg-[#89CDA6] rounded-2xl ">
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-10 xl:gap-16 p-6 pb-0 lg:p-0 rounded-2xl md:rounded-3xl lg:rounded-none lg:bg-transparent">
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
            >
              <span>
                <BadgeWhatsapp className="w-6 aspect-square size-[unset]" />
              </span>
              Contact Us
            </Button>

            <div className="mt-10 hidden lg:block">
              <Image
                src="/image/reservation/res-frame.png"
                alt="Pilihan treatment: Acne Treatment, Slimming Treatment, Eye Treatment, Breastcare Treatment"
                width={580}
                height={85}
                className="max-w-full h-auto object-contain mx-auto lg:mx-0"
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-5/12 xl:w-[45%] lg:order-0 lg:scale-90 lg:origin-bottom flex justify-center lg:justify-start">
            <Image
              src="/image/reservation/reservation.png"
              alt="Konsultasi layanan kecantikan terpercaya dan bersertifikat"
              width={580}
              height={550}
              className="max-w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
