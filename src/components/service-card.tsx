import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BadgeObat from "./icons/BadgeObat";

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  reserveLink?: string;
}

export default function ServiceCard({
  imageUrl,
  imageAlt,
  title,
  description,
  reserveLink = "#",
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl max-w-sm overflow-hidden flex flex-col min-h-[492px] gap-[24px] p-7">
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

      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-[#6C87AE] mb-4 flex-grow">{description}</p>

        <Button
          asChild={!!reserveLink}
          variant="default"
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
