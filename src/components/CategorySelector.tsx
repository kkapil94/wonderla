"use client";
import Image from "next/image";
import React from "react";

function CategorySelector() {
  const [rideCategory, setRideCategory] = React.useState("Land");
  const ridesType = [
    {
      name: "Land",
      icon: "/icons/landRides.svg",
      classes: "top-[74px] left-[70%]",
    },
    {
      name: "Water",
      icon: "/icons/waterRides.svg",
      classes: "top-[12rem] left-[83%]",
    },
    {
      name: "Kids",
      icon: "/icons/kidsRides.svg",
      classes: "top-[20rem] left-[70%]",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="absolute">
          <div
            className={`relative -left-[22rem] bg-white w-[40rem] h-[40rem] rounded-full transition-all ease-in duration-[5s] ${
              rideCategory === "Land"
                ? "bg-gradient-to-tr"
                : rideCategory === "Kids"
                ? "bg-gradient-to-br"
                : "bg-gradient-to-r"
            } from-white to-[#FFC700]`}
          >
            {ridesType.map((item) => (
              <div
                className={
                  "relative w-[13rem] h-[5rem] rounded-full  flex justify-between items-center " +
                  item.classes
                }
                onClick={() => setRideCategory(item.name)}
              >
                <div
                  className={
                    rideCategory === item.name
                      ? "bg-white rounded-full w-[8rem] h-[8rem] flex justify-center items-center border-amber-300 border-8 z-10 transition-all duration-500"
                      : "w-[8rem] h-[8rem] flex justify-center items-center"
                  }
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={rideCategory === item.name ? 80 : 60}
                    width={rideCategory === item.name ? 80 : 60}
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
