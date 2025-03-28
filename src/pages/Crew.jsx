import React, {useState} from 'react';
import Mark  from '../assets/image-mark-shuttleworth.png'
import Victor from "../assets/image-victor-glover.png";
import Douglas from "../assets/image-douglas-hurley.png";
import Anousheh from "../assets/image-anousheh-ansari.png";

function Crew() {

  const crews = {
    MARK: {
      image: Mark,
      name: "MARK SHUTTLEWORTH",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      title: "MISSION SPECIALIST",
      
    },

    VICTOR: {
      image: Victor,
      name: "VICTOR GLOVER",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      title: "PILOT",
      
    },

    DOUGLAS: {
      image: Douglas,
      name: "DOUGLAS HURLEY",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      title: "COMMANDER",
      
    },

    ANOUSHEH: {
      image: Anousheh,
      name: "ANOUSHEH ANSARI",
      description:
        " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      title: "FLIGHT ENGINEER",
      
    },

  }

  

  const [selected, setSelected] = useState("MARK");

  const currentCrew = crews[selected];




  return (
    <div className='text-white'>
      <p className=" pl-40 py-6 md:py-10 lg:py-16 px-6 md:px-10 lg:px-16 text-lg md:text-xl lg:text-[20px]">
        02 MEET YOUR CREW
      </p>
      <div className=" flex flex-col md:flex-col lg:flex-row justify-between px-6 md:px-16 lg:px-40">
        <div className=' order-2 md:order-1 lg:order-1 text-center lg:text-left pt-8 md:16 lg:pt-36'>
          <p className=' text-xl md:text-2xl lg:text-[30px] text-gray-400'>{currentCrew.title}</p>
          <p className=' py-1 md:py-2 text-2xl md:3xl lg:text-[40px]'>{currentCrew.name}</p>
          <p className=' pb-6 md:pb-12 lg:pb-24 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0 text-gray-300'>{currentCrew.description}</p>
          <ul className=' flex gap-4 md:gap-6 lg:gap-[50px] justify-center lg:justify-start mb-8 md:mb-o'>
          {Object.keys(crews).map((key) => (
              <li
                key={key}
                onClick={() => setSelected(key)}
                className={`cursor-pointer rounded-full w-2.5 h-2.5 ${
                  selected === key ? "bg-black" : "bg-gray-400"
                }`}
                
              >
              </li>
            ))}
          </ul>
        </div>
        <div className=' order-1 md:order-2 lg:order-2 flex justify-center md:border-b-0 pb-6 md:pb-0'>
        <img src={currentCrew.image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Crew