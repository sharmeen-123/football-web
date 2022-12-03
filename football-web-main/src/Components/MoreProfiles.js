import React from "react";
import pfp from "../assets/pfp.png";
import img1 from "../assets/a.png"
import img2 from "../assets/b.png"
import img3 from "../assets/c.png"
import "../styles/font.css"
export default function MoreProfiles() {
  const staticdata = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];
  return (
    <>
      <div className=" flex items-center justify-between ">
        <h4 class="self-center text-lg font-normal font-lexend whitespace-nowrap text-white  ">
          More Profiles
        </h4>
        <a class="text-sm text-gray-500 ml-auto font-lexend">All</a>
      </div>
      <div className=" grid grid-cols-5 gap-x-2 mt-7">
        {" "}
        {staticdata.slice(0, 2).map((val, ind) => (
          <img
            class="mb-3 w-10 h-10 rounded-full shadow-lg"
            src={img1}
            alt="Bonnie image"
          />
          
        ))}
        {staticdata.slice(0, 4).map((val, ind) => (
          <img
            class="mb-3 w-10 h-10 rounded-full shadow-lg"
            src={img2}
            alt="Bonnie image"
          />
          
        ))}
        {staticdata.slice(0, 4).map((val, ind) => (
          <img
            class="mb-3 w-10 h-10 rounded-full shadow-lg"
            src={img3}
            alt="Bonnie image"
          />
          
        ))}
      </div>
    </>
  );
}
