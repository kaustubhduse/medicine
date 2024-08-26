import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Card({ status, thc, list, title, subtitle }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust this value based on when you want the effect to trigger
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isRed = status === "red";

  return (
    <div
      ref={cardRef}
      className={`w-fit md:w-auto mt-[8%] rounded-tl-[30px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[30px] border-2 border-[rgba(40,227,233,1)] card ${isVisible ? 'visible' : ''} transform transition-transform duration-500 hover:scale-105` }
    >
      <div>
      <div className={`w-fit ml-[7%] mt-[5%] px-2 py-1 rounded-2xl flex items-center ${isRed ? 'bg-[rgba(161,12,12,0.05)]' : 'bg-[rgba(13,112,82,0.05)]'}`}>
      <span
        className={`w-2 h-2 rounded-full mr-2 ${isRed ? 'bg-red-600' : 'bg-green-600'} blinking`}
      ></span>
      <p className={`text-md ${isRed ? 'text-[rgba(161,12,12,1)]' : 'text-[rgba(13,112,82,1)]'}`}>
        {isRed ? "nicht lieferbar" : "sofort lieferbar"}
      </p>
    </div>
        <Image
          width={400}
          height={100}
          src="/assets/medicine.png"
          alt="Search"
          className="cursor-pointer justify-center items-center"
        />
      </div>
      <div className="bg-[rgba(98,195,198,0.3)] py-[7%] rounded-br-[30px]">
        <div className="px-[7%]">
          <div className="bg-[rgba(89,174,177,0.3)] w-fit px-2 py-1 rounded-lg">
            <h1 className="text-lg md:text-xl font-bold text-[rgba(54,87,88,1)]">
              Canify
            </h1>
          </div>
          <div className="flex flex-wrap justify-between mt-4 md:mt-[7%]">
            <div className="text-[rgba(17,106,108,1)] text-base md:text-xl bg-white rounded-sm px-4 py-1">
              <h1>THC {thc}%</h1>
            </div>
            <div className="text-white bg-[rgba(98,195,198,1)] text-base md:text-xl rounded-sm px-4 py-1">
              <h1>CBD &lt; 1%</h1>
            </div>
            <Image
              width={30}
              height={20}
              src="/assets/smile.png"
              alt="Search"
              className="ml-2 cursor-pointer mt-2 md:mt-0"
            />
          </div>
          <h1 className="text-[rgba(17,106,108,1)] text-xl md:text-xl font-bold mt-4 md:mt-[7%]">
            {title}
          </h1>
          <h1 className="text-[rgba(17,106,108,1)] text-xl md:text-xl font-bold ">
            {subtitle}
          </h1>
          <div className="flex justify-between mt-4 md:mt-[12%]">
            <p className="text-base md:text-xl text-[rgba(54,87,88,1)]">
              Kultivar
            </p>
            <p className="text-base md:text-xl text-[rgba(54,87,88,1)]">
              {list}
            </p>
          </div>
          <div className="flex justify-between mt-[2%]">
            <p className="text-base md:text-xl text-[rgba(54,87,88,1)]">
              Genetik
            </p>
            <p className="text-base md:text-xl text-[rgba(54,87,88,1)]">
              Hybrid
            </p>
          </div>
          <div className="flex justify-between mt-6 md:mt-[15%]">
            <div className="flex">
              <span className="text-[rgba(98,195,198,1)] text-2xl md:text-3xl font-extrabold">
                €
              </span>
              <span className="text-[rgba(17,106,108,1)] text-2xl md:text-3xl font-extrabold">
                11,66
              </span>
            </div>

            <div>
              <h1 className="bg-[rgba(236,254,170,1)] rounded-tl-[24px] rounded-br-[24px] px-4 py-2 text-sm md:text-base">
                in den Warenkorb
              </h1>
            </div>
          </div>
          <p className="text-sm md:text-base">pro Gramm</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
