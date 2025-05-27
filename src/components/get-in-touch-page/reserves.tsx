"use client";
import Image from "next/image";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function Reserves() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-emerald-50 px-4 pt-10 pb-20 sm:px-6 sm:pt-12 sm:pb-12 md:px-8 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
      {" "}
      {/* Tambahkan pb-20 untuk mobile, sesuaikan untuk ukuran lain jika perlu */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 lg:gap-x-20 items-start max-w-[1180px]">
        {/* Kolom Kiri */}
        <div className="space-y-4 text-left">
          <div className="inline-flex bg-emerald-200 p-3 rounded-full mb-2">
            <Image
              src="/image/getintouch/heart.png"
              width={28}
              height={28}
              alt="Heart Icon"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
            Reserve Our <br />
            Service Now. <br />
            Limited Seat!
          </h1>
          <p className="text-slate-600 text-lg">
            Anda memiliki pertanyaan seputar Servis di Venice Clinic? Kami di
            sini akan membantu Anda.
          </p>
        </div>

        {/* Kolom Kanan - Formulir */}
        <div className="w-full">
          <Card className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="whatsapp"
                    className="text-sm font-medium text-slate-700"
                  >
                    Whatsapp Number
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="Whatsapp Number"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="mt-1.5"
                    rows={4}
                  />
                </div>
                {/* Perbaikan pada Tombol Submit */}
                <Button
                  type="submit"
                  className="w-1/2 md:w-1/3 h-12 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base rounded-full"
                  size="lg"
                >
                  <Stethoscope className="mr-2 h-5 w-5" /> Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
