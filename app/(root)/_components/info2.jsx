import { t } from "../../../utils/translate";
import React from "react";
import CustomImage from "./image";

const Info2 = () => {
  return (
    <div className="xl:w-[1360px] mx-auto w-[94%] flex flex-col gap-[30px] polo:gap-[50px]">
      <p className="text-[24px] leading-[32px] polo:text-[42px] polo:leading-[52px] font-semibold text-mainBlack font-montserrat">
        {t("info2.p1")}
      </p>

      <div className="w-full h-[282px] md:h-[661px] rounded-[10px] relative">
        <CustomImage
          image={"/images/in2.webp"}
          alt={t("info2.p1")}
          fill
          className1="object-cover rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Info2;
