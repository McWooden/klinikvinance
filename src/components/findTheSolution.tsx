import React from "react";
import unsplash3Ftypnvspn0 from "./unsplash-3ftypnvspn0.svg";
import unsplashTmfeatbss4S from "./unsplash-tmfeatbss4s.svg";
import unsplashYijvOscsqq from "./unsplash-yijv-oscsqq.svg";

export const contactUsIllustration = () => {
  return (
    <div className="w-[316px] h-[235px]">
      <div className=" w-[316px] left-0 h-[235px] top-0">
        <div className="relative w-[362px] h-[250px] left-[-23px]">
          <div className="absolute w-[236px] left-[63px] rounded-[118.16px/117.5px] border border-dashed border-[#447759] h-[235px] top-0">
            <div className="relative w-[193px] h-48 top-[22px] left-[22px] rounded-[96.3px/95.76px] border border-dashed border-[#447759]">
              <div className="absolute w-[141px] h-[141px] top-6 left-[25px] bg-[#447759] rounded-[70.71px/70.31px] opacity-10" />

              <div className="absolute w-[102px] h-[102px] top-11 left-11 bg-[#f1f9f4] rounded-[51.17px/50.89px]" />
            </div>
          </div>

          <img
            className="absolute w-[159px] h-40 top-[9px] left-[203px]"
            alt="Unsplash"
            src={unsplash3Ftypnvspn0}
          />

          <img
            className="absolute w-[163px] h-[162px] top-[9px] left-0 object-cover"
            alt="Unsplash"
            src={unsplashTmfeatbss4S}
          />

          <img
            className="absolute w-[148px] h-[147px] top-[103px] left-[109px] object-cover"
            alt="Unsplash yijv oscsqq"
            src={unsplashYijvOscsqq}
          />
        </div>
      </div>
    </div>
  );
};
