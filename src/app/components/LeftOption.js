import React, { useState } from "react";

function LeftOption() {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  // Function to handle option clicks
  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const handleClick2 = (option) => {
    setSelectedOption2(option);
  };

  return (
    <div>
      {/* Genetik Section */}
      <div className="border-b border-[rgba(98,195,198,0.3)] py-[15%]">
        <h1 className="text-center text-[rgba(54,87,88,1)] font-medium text-2xl">
          Genetik
        </h1>
        <div className="flex flex-col md:flex-row justify-between mt-[10%] space-y-4 md:space-y-0">
          <div
            onClick={() => handleClick("Indica")}
            className={`rounded-md px-[5%] py-[2%] cursor-pointer transform transition-transform duration-300 ${
              selectedOption === "Indica"
                ? "bg-[rgba(98,195,198,1)] text-white scale-105"
                : "bg-[rgba(98,195,198,0.3)] text-[rgba(4,90,92,1)]"
            } hover:scale-105`}
          >
            <h1 className="font-semibold text-center">Indica</h1>
          </div>
          <div
            onClick={() => handleClick("Sativa")}
            className={`rounded-md px-[5%] py-[2%] cursor-pointer transform transition-transform duration-300 ${
              selectedOption === "Sativa"
                ? "bg-[rgba(98,195,198,1)] text-white scale-105"
                : "bg-[rgba(98,195,198,0.3)] text-[rgba(4,90,92,1)]"
            } hover:scale-105`}
          >
            <h1 className="font-semibold text-center">Sativa</h1>
          </div>
          <div
            onClick={() => handleClick("Hybrid")}
            className={`rounded-md px-[5%] py-[2%] cursor-pointer transform transition-transform duration-300 ${
              selectedOption === "Hybrid"
                ? "bg-[rgba(98,195,198,1)] text-white scale-105"
                : "bg-[rgba(98,195,198,0.3)] text-[rgba(4,90,92,1)]"
            } hover:scale-105`}
          >
            <h1 className="font-semibold text-center">Hybrid</h1>
          </div>
        </div>
      </div>

      {/* Bestrahltung Section */}
      <div className="border-b border-[rgba(98,195,198,0.3)] py-[15%]">
        <h1 className="text-center text-[rgba(54,87,88,1)] font-medium text-2xl">
          Bestrahltung
        </h1>
        <div className="flex flex-col md:flex-row justify-between mt-[10%] space-y-4 md:space-y-0">
          <div
            onClick={() => handleClick2("bestrahlt")}
            className={`rounded-md px-[5%] py-[2%] cursor-pointer transform transition-transform duration-300 ${
              selectedOption2 === "bestrahlt"
                ? "bg-[rgba(98,195,198,1)] text-white scale-105"
                : "bg-[rgba(98,195,198,0.3)] text-[rgba(4,90,92,1)]"
            } hover:scale-105`}
          >
            <h1 className="font-semibold text-center">bestrahlt</h1>
          </div>
          <div
            onClick={() => handleClick2("nicht bestrahlt")}
            className={`rounded-md px-[3%] py-[2%] cursor-pointer transform transition-transform duration-300 ${
              selectedOption2 === "nicht bestrahlt"
                ? "bg-[rgba(98,195,198,1)] text-white scale-105"
                : "bg-[rgba(98,195,198,0.3)] text-[rgba(4,90,92,1)]"
            } hover:scale-105`}
          >
            <h1 className="font-semibold text-center">nicht bestrahlt</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftOption;
