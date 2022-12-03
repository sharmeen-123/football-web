import React from "react";
import Document from "../assets/Document.png";
import "../styles/font.css"

import MoreProfiles from "./MoreProfiles";
import RecentActivityies from "./RecentActivityies";
export default function ClubhubSidebar() {
 
  return (
    <div >
      {/* Parent Profile Card */}
      <div className="">
        <h2 class="self-center font-lexend text-lg font-medium whitespace-nowrap text-white ml-7 mt-8 ">
          File Preview
        </h2>
        <div className="flex grow-0 rounded-[4px] m-2 bg-[#212121] pr-30">
        <img  src={Document} alt="image not found"/>
        </div>
        <div className="flex">
            <div className="flex-1">
            <p class="self-center font-lexend text-lg font-medium whitespace-nowrap text-white ml-7 mt-4 ">
            Rules and Regulations.pdf
            </p>
            <p className="text-white font-lexend ml-7 font-[16px]">file size : 25mb</p>
            </div>
            <div className="flex-1 grow-0 mt-6">
                <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.1 22.2284C2.1 23.753 3.35987 25 4.90002 25H16.1C17.6401 25 18.9 23.753 18.9 22.2284V6.25H2.1V22.2284ZM21 2.08333H15.75L13.9922 0H7.00783L5.25 2.08333H0V4.16667H21V2.08333Z" fill="#FF0000"/>
                </svg>

            </div>
        
        </div>
        <hr className="mt-5"/>
        </div>
    </div>
  );
}
