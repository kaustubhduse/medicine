import React, { useState } from "react";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import SlidingBar from "./SlidingBar";
import LeftOption from "./LeftOption";

function LeftSide() {
  // State to manage the slider values

  return (
    <div className="md:w-[20%] w-[40%] mt-[7%]">
      <div className="flex space-x-4">
        <Image
          width={25}
          height={25}
          src="/assets/darkleaf.png"
          alt="Rezept einlösen"
          className="w-6"
        />
        <h1 className="text-4xl font-bold">Blüten</h1>
      </div>

      {/* Left bar */}
      <div className="items-center justify-center ">
        <div></div>
        <div className="mt-[20%] text-center bg-[rgba(98,195,198,0.1)] mb-[20%]">
          <h1 className="font-semibold text-xl">Filter</h1>
        </div>

        {/* SlidingBar component */}
        <SlidingBar title="Preis" />

        <div className="border-b border-[rgba(98,195,198,0.3)] py-[15%]">
          <h1 className="text-center text-[rgba(54,87,88,1)] font-medium text-2xl">
            Hersteller
          </h1>
          <div className="mt-[12%] flex flex-col space-y-3">
            <div>
              <input
                type="checkbox"
                id="ADREXpharma"
                name="ADREXpharma"
                value="ADREXpharma"
                className="h-4 w-4 border border-[rgba(98,195,198,1)]"
              />
              <label htmlFor="ADREXpharma" className="ml-2">
                ADREXpharma
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Aurora"
                name="Aurora"
                value="Aurora"
                className="h-4 w-4"
              />
              <label htmlFor="Aurora" className="ml-2 ">
                Aurora
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Avaay"
                name="Avaay"
                value="Avaay"
                className="h-4 w-4"
              />
              <label htmlFor="Avaay" className="ml-2">
                Avaay
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Bedrocan"
                name="Bedrocan"
                value="Bedrocan"
                className="h-4 w-4"
              />
              <label htmlFor="Bedrocan" className="ml-2">
                Bedrocan
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Cannamedical"
                name="Cannamedical"
                value="Cannamedical"
                className="w-4 h-4 border-[rgba(98,195,198,1)]"
              />
              <label htmlFor="Cannamedical" className="ml-2">
                Cannamedical
              </label>
            </div>
            <div>
              <div>
                <h1 className=" border-2 border-[rgba(236,254,170,1)] rounded-tl-[24px] rounded-br-[24px] py-[2%] px-[20%]">
                  mehr anzeigen
                </h1>
              </div>
            </div>
          </div>
        </div>

        <SlidingBar title="THC Gehalt" />

        <SlidingBar title="CBD Gehalt" />

        <LeftOption />

      </div>
    </div>
  );
}

export default LeftSide;