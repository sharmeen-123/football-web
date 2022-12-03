import React from "react";
import pfp from "../assets/pfp.png";
import "../styles/font.css"

export default function RightSideChat() {
  return (
    <>
      <div className=" mx-10 my-5">
        <div className="flex flex-row-reverse gap-2">
          <img class=" w-10 h-10 rounded-full " src={pfp} alt="Bonnie image" />
          <div>
            <div className="flex flex-row-reverse justify-between mx2">
              <h5 class="text-lg font-normal tracking-tight text-white">
                Dale
              </h5>
              <p class="font-normal text-sm mt-0.5  text-gray-400">
                12.00 PM
              </p>
            </div>
            <p class="font-normal bg-[#212121] text-base font-sans text-white mt-1  rounded-tl-lg rounded-b-lg py-2 px-6">
              I’m coming in 5 minutes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
