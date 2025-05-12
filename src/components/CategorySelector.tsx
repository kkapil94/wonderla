"use client";
import Image from "next/image";
import React from "react";

function CategorySelector() {
  const [rideCategory, setRideCategory] = React.useState({
    name: "Land",
    icon: "/icons/landRides.svg",
    classes: "top-[74px] left-[70%]",
    bgPosition: "top-[50px] left-[70%]",
  });
  const ridesType = [
    {
      name: "Land",
      icon: "/icons/landRides.svg",
      classes: "top-[74px] left-[70%]",
      bgPosition: "top-[50px] left-[70%]",
    },
    {
      name: "Water",
      icon: "/icons/waterRides.svg",
      classes: "top-[12rem] left-[83%]",
      bgPosition: "top-[16rem] left-[82%]",
    },
    {
      name: "Kids",
      icon: "/icons/kidsRides.svg",
      classes: "top-[20rem] left-[70%]",
      bgPosition: "top-[29rem] left-[70%]",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 mt-32">
        <div className="absolute">
          <div
            className={`relative -left-[22rem] w-[40rem] h-[40rem] rounded-full transition-all ease-in duration-500 ${
              rideCategory.name === "Land"
                ? "bg-[conic-gradient(from_0deg,_rgb(232,_233,_241)_-55deg,_rgb(250,_213,_0)_15deg,_rgb(250,_213,_0)_65deg,_rgb(232,_233,_241)_135deg,_rgb(232,_233,_241)_360deg)]"
                : rideCategory.name === "Kids"
                ? "bg-[conic-gradient(from_0deg,_rgb(232,_233,_241)_45deg,_rgb(250,_213,_0)_115deg,_rgb(250,_213,_0)_165deg,_rgb(232,_233,_241)_235deg,_rgb(232,_233,_241)_360deg)]"
                : "bg-[conic-gradient(from_0deg,_rgb(232,_233,_241)_-5deg,_rgb(250,_213,_0)_65deg,_rgb(250,_213,_0)_115deg,_rgb(232,_233,_241)_185deg,_rgb(232,_233,_241)_360deg)]"
            }`}
          >
            <div
              className={`bg-white absolute rounded-full w-[8rem] h-[8rem] flex justify-center items-center border-amber-300 border-8 transition-all duration-500 ease-in z-10 ${rideCategory.bgPosition}`}
            ></div>
            {ridesType.map((item) => (
              <div
                className={
                  "relative w-[13rem] h-[5rem] rounded-full  flex justify-between items-center " +
                  item.classes
                }
                onClick={() => setRideCategory(item)}
              >
                <div
                  className={
                    "w-[8rem] h-[8rem] flex justify-center items-center"
                  }
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={rideCategory.name === item.name ? 80 : 60}
                    width={rideCategory.name === item.name ? 80 : 60}
                    className="z-20 transition-all duration-500 ease-in"
                  />
                </div>
                <div>
                  <span className="text-xl text-white">{item.name}</span>
                  <br />
                  <span className="text-sm bg-[#788BEB] text-white px-2 py-1 rounded-xl">
                    74 rides
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className=" relative -top-[35rem] -left-[18rem] bg-[#22304a] w-[30rem] h-[30rem] rounded-full"></div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}

export default CategorySelector;
