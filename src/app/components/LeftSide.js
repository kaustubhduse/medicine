import React from "react";
import Image from "next/image";
import SlidingBar from "./SlidingBar";
import LeftOption from "./LeftOption";

function LeftSide() {
  return (
    <div className="md:w-[20%] w-[40%] mt-[7%] h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hidden">
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
      <div className="items-center justify-center">
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
            {["ADREXpharma", "Aurora", "Avaay", "Bedrocan", "Cannamedical"].map((brand) => (
              <div key={brand}>
                <input
                  type="checkbox"
                  id={brand}
                  name={brand}
                  value={brand}
                  className="h-4 w-4 border border-[rgba(98,195,198,1)]"
                />
                <label htmlFor={brand} className="ml-2">
                  {brand}
                </label>
              </div>
            ))}
            <div>
              <h1 className="border-2 border-[rgba(236,254,170,1)] rounded-tl-[24px] rounded-br-[24px] py-[2%] px-[20%] cursor-pointer hover:bg-[rgba(236,254,170,0.2)] transition-colors">
                mehr anzeigen
              </h1>
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
