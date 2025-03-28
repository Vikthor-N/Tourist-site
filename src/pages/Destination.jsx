import React, { useState } from "react";
import Moon from "../assets/image-moon.png";
import Mars from "../assets/image-mars.png";
import Europa from "../assets/image-europa.png";
import Titan from "../assets/image-titan.png";

function Destination() {
  const destinations = {
    MOON: {
      image: Moon,
      name: "MOON",
      description:
        "Mars is the fourth planet from the Sun. It's often called the 'Red Planet' due to its reddish appearance.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },

    MARS: {
      image: Mars,
      name: "MARS",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis beatae reiciendis cumque? Id fuga amet qui inventore cupiditate libero repellat.",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },

    EUROPA: {
      image: Europa,
      name: "EUROPA",
      description:
        "Europa is one of Jupiter's moons. Its icy surface may conceal a vast subsurface ocean.",
      distance: "628 MIL. KM",
      travelTime: "6 YEARS",
    },

    TITAN: {
      image: Titan,
      name: "TITAN",
      description:
        "Titan is Saturn's largest moon. Known for its dense atmosphere and surface liquid lakes.",
      distance: "1.2 BIL. KM",
      travelTime: "7 YEARS",
    },
  };

  const [selected, setSelected] = useState("MOON");

  const currentDestination = destinations[selected];

  return (
    <>
      <p className=" text-base md:text-lg lg:text-xl px-6 md:px-16 lg:pl-28 py-6 md:py-10 lg:py-16 text-center md:text-center lg:text-left text-white">
        01 PICK YOUR DESTINATION
      </p>
      <div className=" flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 md:px-16 lg:px-40 text-white">
        <div className="mb-8 md:mb-10 lg:mb-0">
          <img
            src={currentDestination.image}
            alt={currentDestination.name}
            className=" h-48 w-48 md:h-72 md:w-72 lg:h-[400px] lg:w-[400px]"
          />
        </div>
        <div className=" w-full lg:w-auto text-center lg:text-left">
          <ul className=" flex justify-center lg:justify-start gap-4 md:gap-8 lg:gap-[50px] mb-6 md:mb-8">
            {Object.keys(destinations).map((key) => (
              <li
                key={key}
                onClick={() => setSelected(key)}
                className={`cursor-pointer text-sm md:text-base pb-2 ${
                  selected === key
                    ? "border-b-4 md:border-b-4 border-white"
                    : "text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-400"
                }`}
              >
                {key}
              </li>
            ))}
          </ul>
          <p className=" text-5xl md:text-7xl lg:text-[100px] mb-2 md:mb-4">{currentDestination.name}</p>
          <p className=" border-b border-gray-700 pb-6 md:pb-8 lg:pb-10 max-w-xs md:max-w-lg lg:max-w-[400px] mx-auto lg:mx-0 text-sm md:text-base text-gray-300">
            {currentDestination.description}
          </p>
          <div className=" flex flex-col md:flex-row justify-center lg:justify-start gap-8 md:gap-[50px] pt-6 md:pt-8 lg:pt-10 pb-10">
            <div className="text-center md:text-left">
              <p className=" text-xs md:text-[13px] text-gray-400 mb-1 md:mb-2">AVG. DISTANCE</p>
              <p className=" text-xl md:text-[25px]">{currentDestination.distance}</p>
            </div>
            <div className="text-center md:text-left">
              <p className=" text-xs md:text-[13px] text-gray-400 mb-1 md:mb-2">AVG. DISTANCE</p>
              <p className=" text-xl md:text-[25px]">{currentDestination.travelTime}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
