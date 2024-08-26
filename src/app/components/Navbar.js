import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-white ">
      <div className="flex justify-between items-center">
        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Logo or Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Suchen "
            className="border rounded-lg p-2 bg-[rgba(238,247,247,1)] "
          />
          <Image
            width={25}
            height={25}
            src="/assets/search.png"
            alt="Search"
            className="ml-2 cursor-pointer"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="flex items-center">
            <Image
              width={25}
              height={25}
              src="/assets/darkleaf.png"
              alt="Rezept einlösen"
              className="w-6 cursor-pointer"
            />
            <h1 className="ml-2 text-sm font-bold cursor-pointer">Rezept einlösen</h1>
          </div>

          <div className="flex items-center">
            <Image
              width={25}
              height={25}
              src="/assets/lightleaf.png"
              alt="Live Bestand"
              className="w-6 h-auto cursor-pointer"
            />
            <h1 className="ml-2 text-sm cursor-pointer">Live Bestand</h1>
          </div>

          <div className="flex items-center">
            <Image
              width={25}
              height={25}
              src="/assets/lightleaf.png"
              alt="Videosprechstunde"
              className="w-6 h-auto cursor-pointer"
            />
            <h1 className="ml-2 text-sm cursor-pointer">Videosprechstunde</h1>
          </div>

          <div className="flex items-center">
            <Image
              width={25}
              height={25}
              src="/assets/lightleaf.png"
              alt="FAQs"
              className="w-6 h-auto cursor-pointer"
            />
            <h1 className="ml-2 text-sm cursor-pointer">FAQs</h1>
          </div>

          <div className="flex items-center">
            <Image
              width={25}
              height={25}
              src="/assets/lightleaf.png"
              alt="Kontakt"
              className="w-6 h-auto cursor-pointer"
            />
            <h1 className="ml-2 text-sm cursor-pointer">Kontakt</h1>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Image
            width={50}
            height={50}
            src="/assets/cart.png"
            alt="Cart"
            className=""
          />
          <Image
            width={100}
            height={25}
            src="/assets/anmelden.png"
            alt="Anmelden"
            className="w-[90%] h-auto"
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center mt-4 pt-4 pb-8">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <Image
                width={25}
                height={25}
                src="/assets/darkleaf.png"
                alt="Rezept einlösen"
                className="w-6 h-auto"
              />
              <h1 className="ml-2 text-sm font-bold">Rezept einlösen</h1>
            </div>
            <div className="flex items-center">
              <Image
                width={25}
                height={25}
                src="/assets/lightleaf.png"
                alt="Live Bestand"
                className="w-6 h-auto"
              />
              <h1 className="ml-2 text-sm">Live Bestand</h1>
            </div>
            <div className="flex items-center">
              <Image
                width={25}
                height={25}
                src="/assets/lightleaf.png"
                alt="Videosprechstunde"
                className="w-6 h-auto"
              />
              <h1 className="ml-2 text-sm">Videosprechstunde</h1>
            </div>
            <div className="flex items-center">
              <Image
                width={25}
                height={25}
                src="/assets/lightleaf.png"
                alt="FAQs"
                className="w-6 h-auto"
              />
              <h1 className="ml-2 text-sm">FAQs</h1>
            </div>
            <div className="flex items-center">
              <Image
                width={25}
                height={25}
                src="/assets/lightleaf.png"
                alt="Kontakt"
                className="w-6 h-auto"
              />
              <h1 className="ml-2 text-sm">Kontakt</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
