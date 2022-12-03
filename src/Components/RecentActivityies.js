import React from "react";
import pfp from "../assets/pfp.png";
import pic1 from "../assets/pic1.png"
import "../styles/font.css"
export default function RecentActivityies(props) {
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
          Recent Activity
        </h4>
        {props.All === true ? (
        <a class="text-sm text-gray-500 ml-auto font-lexend">All</a>
        ) : (
              <div></div>
            )}
      </div>
      <div className="">
        {" "}
        {staticdata.slice(0, 3).map((val, ind) => (
          <div className="flex gap-2 mt-5 ">
            <div className="flex items-center">
              <img
                class=" w-8 h-8 rounded-full shadow-lg"
                src={pfp}
                alt="Bonnie image"
              />
            </div>
            <div className="ml-1">
              <div className="flex gap-1 items-center">
                <h6 class=" font-medium whitespace-nowrap text-sm font-lexend text-white  ">
                  Jhon
                </h6>
                <p class="text-xs font-lexend text-gray-500 ">Posted a photo</p>
              </div>
              <p class="text-xs font-lexend text-gray-500 ">5 mins ago</p>
            </div>
            {props.Preview === true ? (
              <div className="flex items-center">
              <img
                class="ml-[25px] w-8 h-8 rounded-2 shadow-lg"
                src={pic1}
                alt="Bonnie image"
              />
            </div>
            ) : (
              <div></div>
            )}
           
          </div>
        ))}
      </div>
    </>
  );
}
