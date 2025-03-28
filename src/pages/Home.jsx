import React from "react";


function Home() {
  return (
    <>
      <div className=" flex flex-col md:flex-col lg:flex-row justify-between items-center px-6 md:px-16 lg:px-[200px] pt-16 md:pt-32 lg:pt-[200px] text-white text-center lg:text-left">
        <div className=" w-full lg:w-[50%]">
          <h1 className=" text-base md:text-lg lg:text-xl text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            nesciunt
          </h1>
          <p className=" text-5xl md:text-7xl lg:text-[100px] text-white my-4 md-6">SPACE</p>
          <div className=" text-sm md:text-base lg:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            est, doloremque accusantium incidunt ipsum ea dolorem eligendi
            libero amet reiciendis quidem ex ab exercitationem provident eaque.
            Maiores amet repellendus doloribus!
          </div>
        </div>
        <div className=" mt-10 md:mt-16 lg:mt-[100px] mb-16 md:mb-20 lg:mb-0">
          <div className=" bg-white rounded-full h-36 w-36 md:h-40 md:w-40 lg:h-48 lg:w-48 flex items-center justify-center text-black mx-auto hover:scale-105 transition-transform cursor-pointer">
            EXPLORE
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
