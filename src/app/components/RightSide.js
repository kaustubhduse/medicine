import React from "react";
import Image from "next/image";
import Card from "./UI/Card";

function RightSide() {
  return (
    <div className="mt-[7%] w-[100%]">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-[3%]">
        <div className="flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Suchen"
            className="border rounded-2xl p-2 bg-[rgba(129,145,145,0.1)] w-full md:w-auto"
          />
          <Image
            width={25}
            height={25}
            src="/assets/search.png"
            alt="Search"
            className="ml-2 cursor-pointer"
          />
        </div>
        <div className="bg-[rgba(98,195,198,0.3)] py-2 px-4 rounded-lg w-full md:w-auto text-center flex items-center justify-between">
          <h1 className="mr-2">Sortieren nach</h1>
          <button className="bg-white text-black py-1 px-2 rounded-md">
            ▼
          </button>
        </div>

        <div className="bg-[rgba(98,195,198,0.3)] py-2 px-4 rounded-lg w-full md:w-auto text-center flex items-center justify-between">
  <h1>Verfügbarkeit</h1>
  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
  </div>
</div>

<style jsx>{`
  .toggle-checkbox:checked {
    right: 0;
    border-color: #4f46e5;
    background-color: #4f46e5;
  }

  .toggle-checkbox:checked + .toggle-label {
    background-color: #34d399;
  }

  .toggle-checkbox + .toggle-label {
    width: 2.5rem;
  }

  .toggle-label::after {
    content: '';
    display: block;
    position: absolute;
    left: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
    background: white;
    border-radius: 9999px;
    transition: transform 0.3s ease;
  }

  .toggle-checkbox:checked + .toggle-label::after {
    transform: translateX(1.25rem);
  }
`}</style>

        <Image
          width={50}
          height={100}
          src="/assets/3line.png"
          alt="Search"
          className="ml-2 cursor-pointer"
        />
      </div>

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[7%]">
        {[...Array(9)].map((_, index) => (
          <Card
            key={index}
            status={index < 3 || index >= 6 ? "red" : "green"}
            thc={index < 3 || index >= 6 ? "18" : "25"}
            list={index < 3 || index >= 6 ? "Mango" : "Pink kush"}
            title={
              index < 3 || index >= 6
                ? "Cannabis Flos 18/1 PT "
                : "Cannabis Flos 25/1 PT"
            }
            subtitle={
              index < 3 || index >= 6 ? "Mango" : "Ku.Pink Kush DAB Canify"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default RightSide;
