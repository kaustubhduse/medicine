import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-wrap bg-[rgba(26,141,145,1)] justify-between mt-[8%] px-[10%] py-[8%] rounded-tl-[30px] rounded-tr-[30px]">
      <div className="w-full md:w-auto mb-4 md:mb-0">
        <p className="text-[rgba(255,255,255,0.5)]">AGB</p>
        <p className="text-[rgba(255,255,255,0.5)]">Impressum</p>
        <p className="text-[rgba(255,255,255,0.5)]">Datenschutz</p>
      </div>
      <div className="w-full md:w-auto flex flex-wrap justify-between">
  <div className="flex items-center mb-4 w-auto md:w-1/3">
    <Image
      width={25}
      height={25}
      src="/assets/darkleaf.png"
      alt="Rezept einlösen"
      className="w-6"
    />
    <h1 className="ml-2 text-sm text-white">Rezept einlösen</h1>
  </div>

  <div className="flex items-center mb-4 w-auto md:w-1/3">
    <Image
      width={25}
      height={25}
      src="/assets/darkleaf.png"
      alt="Live Bestand"
      className="w-6"
    />
    <h1 className="ml-2 text-sm text-white">Live Bestand</h1>
  </div>

  <div className="flex items-center mb-4 w-auto md:w-1/3">
    <Image
      width={25}
      height={25}
      src="/assets/darkleaf.png"
      alt="Videosprechstunde"
      className="w-6"
    />
    <h1 className="ml-2 text-sm text-white">Videosprechstunde</h1>
  </div>

  <div className="flex items-center mb-4 w-auto md:w-1/3">
    <Image
      width={25}
      height={25}
      src="/assets/darkleaf.png"
      alt="FAQs"
      className="w-6"
    />
    <h1 className="ml-2 text-sm text-white">FAQs</h1>
  </div>

  <div className="flex items-center mb-4 w-auto md:w-1/3">
    <Image
      width={25}
      height={25}
      src="/assets/darkleaf.png"
      alt="Kontakt"
      className="w-6"
    />
    <h1 className="ml-2 text-sm text-white">Kontakt</h1>
  </div>
</div>


      <div className="w-full md:w-auto mb-4 md:mb-0">
        <p className="text-[rgba(255,255,255,0.5)]">Standort</p>
        <h1 className="text-white font-semibold">
          Bergstraße 49 - 57 <br></br>69469 Weinheim<br></br>(3 Glocken
          Quartier)
        </h1>
      </div>

      <div className="w-full md:w-auto mb-4 md:mb-0">
        <p className="text-[rgba(255,255,255,0.5)]">Telefon</p>
        <h1 className="text-white font-semibold mt-2">0223 545 5250</h1>
      </div>

      <div className="w-full md:w-auto md:flex-col flex justify-between">
        <p className="text-[rgba(255,255,255,0.5)]">Öffnungszeiten</p>
        <div>
          <p className="text-[rgba(255,255,255,0.5)] mt-2">Mo-Fr</p>
          <h1 className="text-white font-semibold">09:00-18:00 Uhr</h1>
        </div>
        <div>
          <p className="text-[rgba(255,255,255,0.5)] mt-2">Sa</p>
          <h1 className="text-white font-semibold">09:00-14:00 Uhr</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
