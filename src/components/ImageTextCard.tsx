import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageTextCardProps {
  imagePath: string;
  title: string;
  titleClassName?: string;
  description: string;
  description2?: string;
  description3?: string;
  reverse?: boolean;
}

export default function ImageTextCard({
  imagePath,
  title,
  titleClassName,
  description,
  description2,
  description3,
  reverse = false,
}: ImageTextCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Image */}
      <div
        className={cn(
          "w-full md:w-1/2",
          reverse ? "order-2 md:order-2" : "order-1 md:order-1"
        )}
      >
        <Image
          src={imagePath}
          alt={title}
          width={1200}
          height={800}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* Text */}
      <div
        className={cn(
          "w-full md:w-1/2",
          reverse ? "order-1 md:order-1" : "order-2 md:order-2",
          "flex flex-col gap-4"
        )}
      >
        <h3 className={cn("text-2xl font-bold", titleClassName)}>{title}</h3>
        <p className="text-gray-600">{description}</p>
        {description2 && <p className="text-gray-600">{description2}</p>}
        {description3 && <p className="text-gray-600">{description3}</p>}
      </div>
    </div>
  );
}
