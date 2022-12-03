import React from "react";
import pfp from "../assets/pfp.png";
import "../styles/font.css"
export default function RecentChats() {
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
  ];
  return (
    <>
      <div className="">
        <div className="font-lexend mt-12 ">
          <div className="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5  text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="bg-[#212121]  text-[rgba(255, 255, 255, 0.53)] text-sm rounded-md w-full pl-10 p-2.5   placeholder-gray-400"
              placeholder="Search User"
              required=""
            />
          </div>

          <div>
            {staticdata.map((val, ind) => {
              const checkavaliblity = ind % 2 == 0;
              return (
                <div className=" mt-10 mb-8">
                  <div className="flex gap-3">
                    <img
                      class=" w-12 h-12 rounded-full "
                      src={pfp}
                      alt="Bonnie image"
                    />
                    <div>
                      <h5 class="text-lg font-lexend font-medium tracking-tight  text-white">
                        Dale
                      </h5>
                    <p class="font-normal font-lexend text-sm  mt-0 text-[#777777]">
                        Trainings going good
                      </p>
                    </div>
                    <p class="font-medium text-xs mt-2  text-[#777777]">
                      12.00 PM
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
