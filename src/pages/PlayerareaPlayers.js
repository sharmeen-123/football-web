import React from "react";
import Header from "../Components/Header";
import playerimg from "../assets/palyerimg.png";
import "../styles/font.css"
export default function PlayerareaPlayers() {
  const playerdata = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    

  ];

  return (
    <div className="flex-col w-full ">
      {/* Page Header */}
      <Header title={"Players Area"} />
      {/* Title Of the Page */}
      <h4 class="self-center font-lexend text-xl font-semibold whitespace-nowrap text-white mx-9 mt-8 mb-[26px]">
        Players
      </h4>

      {/* Search Button  */}
      <div className="flex items-center justify-start gap-10 ml-10 mr-12 mt-5 mb-12">
        <form class="flex items-center w-full">
          <div class="relative w-full">
            <div class="flex w-[591px]  absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5   text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="w-1/2 bg-[#212121]    text-sm rounded-lg block  pl-10 p-2.5  placeholder-gray-400 text-white "
              placeholder="Search Players"
              required=""
            />
          </div>
          <button
            class="text-white font-dm bg-green-500 ml-auto  focus:outline-none font-normal rounded-[4px] text-sm px-6 py-2 text-center inline-flex items-center"
            type="button"
          >
           Group
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            
          </button>
        </form>
      </div>

      {/* Player Card */}

      <div className="grid grid-cols-7 gap-y-5 mr-9 ml-10 sm:gap-4 xl:gap-5 2xl:grid-cols-8  ">
        {playerdata.map((val, ind) => {
          const change = ind % 2 == 0;
         
          return (
            <div class="max-w-[141px] bg-transparent">
              <a href="/playerprofile/profile"><img class={change?"rounded-[4px] bg-[#212121]":"rounded-[4px] bg-white"} src={playerimg} alt="" /></a>

              <div class="p-2 font-lexend">
                <h5 class="mb-0 mt-3 text-lg text-center  font-normal tracking-tight  text-white">
                  Marcelo Diaz
                </h5>
                <p class="mb-3 text-sm sm:text-xs font-normal text-center  text-[#7e7e7e]">
                  Defender
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* pagination */}

      <div className="flex items-center justify-end font-lexend">
          <h4 class="self-center text-xl font-normal whitespace-nowrap text-white mr-4 my-5 ">
            Page
          </h4>
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3725 0.3675C9.8825 -0.1225 9.0925 -0.1225 8.6025 0.3675L0.2925 8.6775C-0.0975 9.0675 -0.0975 9.6975 0.2925 10.0875L8.6025 18.3975C9.0925 18.8875 9.8825 18.8875 10.3725 18.3975C10.8625 17.9075 10.8625 17.1175 10.3725 16.6275L3.1325 9.3775L10.3825 2.1275C10.8625 1.6475 10.8625 0.8475 10.3725 0.3675Z"
              fill="#7E7E7E"
            />
          </svg>
          <h4 class="self-center text-xl font-normal whitespace-nowrap text-white ml-3 mr-4 my-5 ">
            1
          </h4>
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.369687 0.3675C0.859687 -0.1225 1.64969 -0.1225 2.13969 0.3675L10.4497 8.6775C10.8397 9.0675 10.8397 9.6975 10.4497 10.0875L2.13969 18.3975C1.64969 18.8875 0.859687 18.8875 0.369687 18.3975C-0.120313 17.9075 -0.120313 17.1175 0.369687 16.6275L7.60969 9.3775L0.359689 2.1275C-0.120311 1.6475 -0.120313 0.8475 0.369687 0.3675Z"
              fill="white"
            />
          </svg>
          <h4 class="self-center text-xl font-normal whitespace-nowrap text-white mx-4 my-5 ">
            out of 22
          </h4>
        </div>
      </div>
  );
}
