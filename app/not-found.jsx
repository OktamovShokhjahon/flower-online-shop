import React from "react";
import { Footer, Header } from "./(root)/_components";
import Image from "next/image";
import img from "../public/images/404.png";

function NotFound() {
  return (
    <div className="main-container">
      <Header />

      <div className="mt-[200px] mb-[150px] flex w-full justify-center items-center flex-col">
        <div>
          <Image src={img} alt="image" width={"100%"} />
        </div>

        <h1 className="bold-title">Запрашиваемая страница не найдена!</h1>
      </div>

      <Footer />
    </div>
  );
}

export default NotFound;
