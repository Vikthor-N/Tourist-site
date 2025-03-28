import React, { useState } from "react";
import LaunchPortrait from "../assets/image-launch-vehicle-portrait.jpg";
import LaunchLandscape from "../assets/image-launch-vehicle-landscape.jpg";
import SpacePortrait from "../assets/image-space-capsule-portrait.jpg";
import SpaceLandscape from "../assets/image-space-capsule-landscape.jpg";
import PortPortrait from "../assets/image-spaceport-portrait.jpg";
import PortLandscape from "../assets/image-spaceport-landscape.jpg";

function Technology() {
  const Technologys = {
    PORT: {
      landscapeImage: PortLandscape,
      portraitImage: PortPortrait,
      name: "SPACEPORT",
      description:
        " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      title: "THE TERMINOLOGY...",
    },

    LAUNCH: {
      landscapeImage: LaunchLandscape,
      portraitImage: LaunchPortrait,
      name: "LAUNCH VEHICLE",
      description:
        " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      title: "THE TERMINOLOGY...",
    },

    SPACE: {
      landscapeImage: SpaceLandscape,
      portraitImage: SpacePortrait,
      name: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      title: "THE TERMINOLOGY...",
    },
  };

  const [selected, setSelected] = useState("PORT");

  const currentTechnology = Technologys[selected];

  return (
    <div className=" text-white">
      <p className=" pl-6 md:pl-10 lg:pl-40 py-6 md:py-10 lg:py-16 text-base md:text-lg lg:text-[20px] text-center md:text-left">
        03 SPACE LUNCH 101
      </p>
      <div className=" flex flex-col md:flex-col lg:flex-row lg:justify-between lg:gap-12 lg:px-40">
        <div className=" order-2 lg:order-1 flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 md:px-10 lg:px-0 py-8 md:py-12 lg:pt-36">
          <ul className=" flex lg:flex-col gap-4 lg:gap-y-12">
            {Object.keys(Technologys).map((key, index) => (
              <li
                key={key}
                onClick={() => setSelected(key)}
                className={`cursor-pointer rounded-full w-[50px] h-[50px] flex items-center justify-center text-white ${
                  selected === key ? "bg-black" : "bg-gray-400"
                }`}
              >
                {" "}
                {index + 1}
              </li>
            ))}
          </ul>
          <div className=" text-center lg:text-left">
            <p className=" text-sm md:text-base lg:text-xl text-gray-400">{currentTechnology.title}</p>
            <p className=" py-2 text-2xl md:text-3xl lg:text-[40px]">{currentTechnology.name}</p>
            <p className=" text-sm md:text-base lg:text-lg text-gray-300 max-w-md mx-auto lg:mx-0">{currentTechnology.description}</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-auto">
          <img
            src={currentTechnology.portraitImage}
            alt={currentTechnology.name}
            className=" hidden lg:block w-full h-auto"
          />
          <img
            src={currentTechnology.landscapeImage}
            alt={currentTechnology.name}
            className=" block lg:hidden w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;
