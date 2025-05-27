import Image from "next/image";
import { Button } from "@/components/ui/button";
import BadgeWhatsapp from "../icons/BadgeWhatsapp";

interface ReservationProps {
  className?: string;
}

export default function Reservation({ className }: ReservationProps) {
  return (
    <section className={`mb-[100px] lg:px-0 px-5 lg:px-0 ${className}`}>
      {/* <div className="bg-[#89CDA6] rounded-2xl max-w-[1180px] min-h-[444px] mx-auto"> */}
        <div className="bg-[#89CDA6] gap-4 rounded-2xl max-w-[1180px] min-h-[444px] mx-auto flex flex-col lg:flex-row lg:items-end md:p-6 pt-6 pb-0 lg:p-0 md:rounded-3xl justify-center">
          <div className="lg:order-1 lg:text-left px-5 md:px-[unset]">
            <h2 className="text-[32px] sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 md:mb-5 leading-tight">
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

          <div className="mt-8 lg:mt-0 lg:order-0 lg:origin-bottom flex justify-center lg:justify-start">
            <Image
              src="/image/reservation/reservation.png"
              alt="Konsultasi layanan kecantikan terpercaya dan bersertifikat"
              width={444}
              height={403}
              className="hidden md:block max-w-full h-auto object-contain rounded-lg"
            />
            <Image
              src="/image/reservation/reservation-2.png"
              alt="Konsultasi layanan kecantikan terpercaya dan bersertifikat"
              width={444}
              height={403}
              className="md:hidden max-w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
