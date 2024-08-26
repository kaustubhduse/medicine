"use client";

import React from "react";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";

function page() {
  return (
    <div className="">
      <div className="p-5 md:p-10">
        <Navbar />
        <div className="flex">
          <LeftSide />
          <div className="ml-[5%]"></div>
          <RightSide />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
