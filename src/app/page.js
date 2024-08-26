"use client";

import React from "react";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";
import Image from "next/image";

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-5 md:p-10 flex-1">
        <Navbar />
        <div className=" md:justify-between md:flex mt-[5%]">
          <div className="flex items-center space-x-2 ">
            <h1 className="text-[rgba(98,195,198,1)]">Home</h1>
            <Image
              width={25}
              height={25}
              src="/assets/arrow.png"
              alt="Arrow"
              className="w-6 h-3"
            />
            <h1 className="text-[rgba(98,195,198,1)]">Livebestand</h1>
            <Image
              width={25}
              height={25}
              src="/assets/arrow.png"
              alt="Arrow"
              className="w-6 h-3"
            />
            <h1 className="text-[rgba(4,90,92,1)] font-extrabold">
              Cannabis Blüten
            </h1>
          </div>

          <div>
            <h1>GKV mit Kostenübernahme?</h1>
            <h1 className=" border-2 border-[rgba(236,254,170,1)] rounded-tl-[24px] rounded-br-[24px] px-12 py-2 w-fit mt-[3%]">
              mehr anzeigen
            </h1>
          </div>
        </div>

        <div className="flex mt-[0%]">
          <LeftSide />
          <div className="ml-5"></div>
          <RightSide />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
