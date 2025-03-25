"use client";

import { t } from "../../../utils/translate";
import BreadCrumps from "../_components/breadcrumps";
import Palantation1 from "../../../public/images/palantation1.png";
import Image from "next/image";

const links = [
  {
    name: t("plantation.p1"),
    href: "/",
  },
  {
    name: t("plantation.p2"),
    href: "/plantation",
  },
];

const Plantation = () => {
  return (
    <div className="main-container">
      <BreadCrumps links={links} />

      <div className="w-full flex justify-between items-center mt-[50px]">
        <div className="w-[48%] flex flex-col justify-between">
          <p className="bold-description">{t("plantation.p3")}</p>
          <p className="light-description py-[30px]">{t("plantation.p4")}</p>
          <div>
            <button className="button">{t("plantation.p5")}</button>
          </div>
        </div>
        <div className="max-w-[50%]">
          <Image
            src={Palantation1}
            width={"100%"}
            height={"100%"}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Plantation;
