import Image from "next/image";
import Link from "next/link";
import { Stethoscope } from "lucide-react"; // Atau ikon lain yang lebih sesuai
import { Button } from "@/components/ui/button"; // Asumsi Anda menggunakan Button dari shadcn/ui
import { cn } from "@/lib/utils";
import BadgeObat from "./BadgeObat";

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
    <div className="bg-white rounded-xl max-w-sm overflow-hidden flex flex-col min-h-[492px] gap-[24px] p-7">
      {/* Bagian Gambar */}
      <div className="relative rounded-lg overflow-hidden w-full">
        <div className="h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="w-full overflow-hidden object-cover"
          />
        </div>
      </div>

      {/* Bagian Konten Teks */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-[#6C87AE] mb-4 flex-grow">{description}</p>

        {/* Tombol Reserve */}
        {/* Menggunakan Link jika reserveLink ada, atau Button biasa */}
        <Button
          asChild={!!reserveLink} // Tombol akan menjadi <a> jika reserveLink ada
          variant="default" // Sesuaikan variant jika perlu
          // className="mt-auto w-full max-w-2xs bg-[#447759] hover:bg-[#417f5a] text-white font-semibold rounded-full py-8 px-6 text-base transition-colors gap-[10px]"
          className="w-full max-w-2xs bg-[#547d5e] hover:bg-[#4a6b53] text-white font-semibold py-7 px-6 rounded-full text-lg flex items-center mx-auto justify-center gap-2 shadow-md cursor-pointer"
        >
          {reserveLink ? (
            <Link href={reserveLink}>
              <BadgeObat width={18} className="size-[unset]" />
              Reserve
            </Link>
          ) : (
            <>
              <BadgeObat width={18} className="size-[unset]" />
              Reserve
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
