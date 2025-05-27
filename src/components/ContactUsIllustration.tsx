import Image from "next/image";

const image1 = "/image/service/custom-1.png";
const image2 = "/image/service/custom-2.png";
const image3 = "/image/service/custom-3.png";

export default function ContactUsIllustration() {
  return (
    <div className="absolute w-[316px] h-[235px]">
      <div className="relative w-[316px] left-0 h-[235px] top-0">
        <div className="relative w-[362px] h-[250px] left-[-23px]">
          <div className="absolute w-[236px] left-[63px] rounded-[118.16px/117.5px] border border-dashed border-[#447759] h-[235px] top-0">
            <div className="relative w-[193px] h-48 top-[22px] left-[22px] rounded-[96.3px/95.76px] border border-dashed border-[#447759]">
              <div className="absolute w-[141px] h-[141px] top-6 left-[25px] bg-[#447759] rounded-[70.71px/70.31px] opacity-10" />

              <div className="absolute w-[96px] h-[96px] top-[48px] left-[46px] bg-[#f1f9f4] rounded-[51.17px/50.89px]" />
            </div>
          </div>

          <ImageCircle
            className="w-[152px] top-[114px] right-[62px] lg:w-[132px] lg:top-[24px] lg:right-[28px]"
            alt="Unsplash"
            src={image1}
          />

          <ImageCircle
            className="w-[152px] top-[54px] left-[42px] lg:w-[132px] lg:top-[24px] lg:left-[28px]"
            alt="Unsplash"
            src={image2}
          />

          <ImageCircle
            className="w-[152px] top-[0px] right-[64px] lg:w-[132px] lg:top-[116px] lg:right-[115px]"
            alt="Unsplash"
            src={image3}
          />
        </div>
      </div>
    </div>
  );
}

type ImageCircleProps = {
  className: string;
  alt: string;
  src: string;
};

function ImageCircle({ className, alt, src }: ImageCircleProps) {
  return (
    <div className={`absolute overflow-hidden aspect-square ${className}`}>
      <Image
        className="object-cover"
        alt={alt}
        src={src}
        fill
        sizes="(max-width: 768px) 100vw, 112px"
      />
    </div>
  );
}
