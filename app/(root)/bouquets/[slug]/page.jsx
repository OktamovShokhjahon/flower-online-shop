import { t } from "../../../utils/translate";
import Link from "next/link";
import React from "react";
import ImageGallery from "../_components/image-gallery";
import ProductDetails from "../_components/product-details";
import ReviewProduct from "../_components/review";
import AddBouquets from "../_components/add-bouquets";

const BouquetsDetail = async ({ params }) => {
  const slug = (await params)?.slug || "";
  console.log(slug);
  return (
    <div className="xl:w-[1360px] mx-auto w-[94%] space-y-[30px] pb-[100px] pt-[20px] sm:pt-[30px]">
      {/* Links */}
      <div className="flex items-center gap-[10px] overflow-hidden">
        <Link
          href={"/"}
          className="text-[16px] leading-[20px] font-medium font-montserrat text-[#453C3C80]/50"
        >
          {t("catalog.p1")}
        </Link>
        <p className="min-w-[2px] h-full bg-mainBlack min-h-[15px]"></p>
        <Link
          href={"/catalog"}
          className="text-[16px] leading-[20px] font-medium font-montserrat text-[#453C3C80]/50"
        >
          Букеты
        </Link>
        <p className="min-w-[2px] h-full bg-mainBlack min-h-[15px]"></p>

        <Link
          href={"/"}
          className="text-[16px] leading-[20px] break-words whitespace-nowrap font-medium font-montserrat text-mainBlack"
        >
          Букет из светло-персиковых кустовых роз Павлова
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 polo:grid-cols-2 gap-[30px] relative overflow-hidden">
        <ImageGallery />
        <ProductDetails />
      </div>

      {/* REVIEW */}
      {/* <ReviewProduct /> */}

      {/* <AddBouquets /> */}
    </div>
  );
};

export default BouquetsDetail;
