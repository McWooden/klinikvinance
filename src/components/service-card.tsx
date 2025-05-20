import Image from "next/image";
import Link from "next/link";
import { Stethoscope } from "lucide-react"; // Atau ikon lain yang lebih sesuai
import { Button } from "@/components/ui/button"; // Asumsi Anda menggunakan Button dari shadcn/ui
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  reserveLink?: string; // Link untuk tombol reserve, opsional
}

export default function ServiceCard({
  imageUrl,
  imageAlt,
  title,
  description,
  reserveLink = "#", // Default link jika tidak disediakan
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      {/* Bagian Gambar */}
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          // className="rounded-t-xl" // Tidak perlu jika parent sudah overflow-hidden
        />
      </div>

      {/* Bagian Konten Teks */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>

        {/* Tombol Reserve */}
        {/* Menggunakan Link jika reserveLink ada, atau Button biasa */}
        <Button
          asChild={!!reserveLink} // Tombol akan menjadi <a> jika reserveLink ada
          variant="default" // Sesuaikan variant jika perlu
          className="mt-auto w-full bg-[#4E8966] hover:bg-[#417f5a] text-white font-semibold rounded-full py-2.5 px-4 text-base transition-colors"
        >
          {reserveLink ? (
            <Link href={reserveLink}>
              <Stethoscope size={18} className="mr-2" />
              Reserve
            </Link>
          ) : (
            <>
              <Stethoscope size={18} className="mr-2" />
              Reserve
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
