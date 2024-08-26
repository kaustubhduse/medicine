import React,{useState} from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function SlidingBar(props) {
  const [priceRange, setPriceRange] = useState([5, 10]);

  // Function to handle the range slider changes
  const handleSliderChange = (newRange) => {
    setPriceRange(newRange);
  };
  return (
    <div className="border-b border-[rgba(98,195,198,0.3)] py-[15%]">
      <h1 className="text-center text-[rgba(54,87,88,1)] font-medium text-2xl">
        {props.title}
      </h1>
      {/* Single range slider with two thumb handles */}
      <div className="flex flex-col space-y-4 mt-[15%]">
        <Slider
          range
          min={0}
          max={20}
          value={priceRange}
          onChange={handleSliderChange}
          railStyle={{ backgroundColor: "rgba(98,195,198,0.3)", height: 8 }} // Adjust the height here
          trackStyle={[{ backgroundColor: "rgba(98,195,198,1)", height: 8 }]} // Adjust the height here
          handleStyle={[
            {
              borderColor: "transparent",
              backgroundColor: "transparent",
              backgroundImage: "url(/assets/darkleaf.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: 35, // Adjust width to make the image visible
              height: 32, // Adjust height to make the image visible
              marginTop: -12, // Adjust positioning if necessary
            },
            {
              borderColor: "transparent",
              backgroundColor: "transparent",
              backgroundImage: "url(/assets/darkleaf.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: 35, // Adjust width to make the image visible
              height: 32, // Adjust height to make the image visible
              marginTop: -12, // Adjust positioning if necessary
            },
          ]}
          allowCross={false} // Prevent the handles from crossing each other
        />
        <div className="flex justify-between ">
          <span className="text-center bg-[rgba(129,145,145,0.1)] w-[45%] rounded-lg">
            {priceRange[0]} €
          </span>
          <span>-</span>
          <span className="text-center bg-[rgba(129,145,145,0.1)] w-[45%] rounded-lg">
            {priceRange[1]} €
          </span>
        </div>
      </div>
    </div>
  );
}

export default SlidingBar;
