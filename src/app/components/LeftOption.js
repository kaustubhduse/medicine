import React from "react";

function LeftOption() {
  return (
    <div>
      <div className="border-b border-[rgba(98,195,198,0.3)] py-[15%]">
        <h1 className="text-center text-[rgba(54,87,88,1)] font-medium text-2xl">
          Genetik
        </h1>
        {/* Single range slider with two thumb handles */}
        <div className="flex flex-col md:flex-row justify-between mt-[10%] space-y-4 md:space-y-0">
          <div className="bg-[rgba(98,195,198,1)] rounded-md px-[5%] py-[2%]">
            <h1 className="font-semibold text-white text-center">Indica</h1>
          </div>
          <div className="bg-[rgba(98,195,198,0.3)] rounded-md px-[5%] py-[2%]">
            <h1 className="font-semibold text-[rgba(4,90,92,1)] text-center">Sativa</h1>
          </div>
          <div className="bg-[rgba(98,195,198,0.3)] rounded-md px-[5%] py-[2%]">
            <h1 className="font-semibold text-[rgba(4,90,92,1)] text-center">Hybrid</h1>
          </div>
        </div>
      </div>

      <div className="border-b border-[rgba(98,195,198,0.3)] py-[15%]">
        <h1 className="text-center text-[rgba(54,87,88,1)] font-medium text-2xl">
          Bestrahltung
        </h1>
        {/* Single range slider with two thumb handles */}
        <div className="flex flex-col md:flex-row justify-between mt-[10%] space-y-4 md:space-y-0">
          <div className="bg-[rgba(98,195,198,1)] rounded-md px-[5%] py-[2%]">
            <h1 className="font-semibold text-white text-center">bestrahlt</h1>
          </div>
          <div className="bg-[rgba(98,195,198,0.3)] rounded-md px-[3%] py-[2%]">
            <h1 className="font-semibold text-[rgba(4,90,92,1)] text-center">nicht bestrahlt</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftOption;
