import React, { useState } from "react";
import pfp from "../assets/pfp.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/player1.png";
import pic3 from "../assets/pic2.png"
import pic4 from "../assets/d.png"
import bg from "../assets/image.png"
import { Line } from "react-chartjs-2";
import "../styles/player.css"
import "../styles/font.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import { click } from "@testing-library/user-event/dist/click";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function PlayerProfileCenterBox() {
  const[edit,setEdit] = useState(false);

  function click(){
    setEdit(true);
  }


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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: staticdata.map((val) => val.id),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      {/* picture card and Graph */}
      <div className="flex my-5 gap-3 mx-7 justify-between">
        <div class="w-full background  lg:max-w-[250px] 2xl:min-w-[350px]  rounded-lg border border-gray-400 ">
          <div class="flex justify-center pl-3 pt-2">
            <div class="flex   ">
           
             <div>
              <h5 class=" text-left text-base font-akira-expanded font-bold  text-white ">
                JOHN 
              </h5>
              <span class="text-3xl font-akira-expanded font-black text-white">
                PETER
              </span>

              <a
                href="/chat"
                class="inline-flex  items-center py-1  px-5 mt-2 text-sm font-medium text-white bg-green-500 rounded-[4px] "
              >
                Chat
              </a>
              </div>
              
              <img
                class="shadow-lg mt-9 mb-5  mx-[-60px]"
                src={pic4}
                alt="Bonnie image"
              />
             
            </div>
           
          </div>
           <div className="flex gap-1 mt-[-40px]  items-center font-['lexend']">
                    <div className="flex-1 m-2 py-2 bg-gradient-to-b from-[#3e3e3e]/40 to-[#000000]/40 rounded-lg">
                      <h5 class="text-xs ml-2 font-medium leading-5 tracking-tight text-green-500">
                        Age
                      </h5>
                      <p class=" text-sm font-medium mt-2 pr-2 pb-2 ml-8 text-white ">
                        12
                      </p>
                    </div>
                    <div className="flex-1 m-2 py-2  bg-gradient-to-b from-[#3e3e3e]/40 to-[#000000]/40 rounded-lg">
                      <h5 class="text-xs ml-2 font-medium leading-5 tracking-tight text-green-500 ">
                        Avg
                      </h5>
                      <p class=" text-sm font-medium mt-2 ml-10 pr-2 pb-2 text-white ">
                        4
                      </p>
                    </div>
                    <div className="flex-1 m-2 py-2 bg-gradient-to-b from-[#3e3e3e]/40 to-[#000000]/40 rounded-lg ">
                      <h5 class="text-xs ml-2 font-medium leading-5 tracking-tight text-green-500 ">
                        Height
                      </h5>
                      <p class=" text-sm font-medium mt-2 ml-8 pr-2 pb-2 text-white ">
                        4ft
                      </p>
                    </div>
                    </div>

        </div>
        <div className="lg:w-[400px] 2xl:w-[800px] ">
          {/* tabs  */}
          <div class="flex justify-left text-sm font-normal font-lexend text-center text-gray-500 ">
            <ul class="flex flex-wrap -mt-[20px]">
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300"
                >
                  Attendence
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="inline-block p-4  rounded-t-lg border-b-2  active text-blue-500 border-blue-500"
                  aria-current="page"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
          <Line options={options} data={data} class="font-lexend" />
        </div>
      </div>
      {/* Pictures */}
      <div className="flex gap-4 my-9 ml-7 mr-5">
        <img
          className="lg:w-[250.5px] lg:h-[190.5px] 2xl:w-[369px] 2xl:h-[307px] "
          src={pic1}
        />
        <img
          className="lg:w-[184.5px] lg:h-[190.5px]  2xl:w-[259px] 2xl:h-[307px]"
          src={pic3}
        />
        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
          <img
            className=" lg:w-[100.5px] lg:h-[90.5px]  2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />
          <img
            className="lg:w-[100.5px] lg:h-[90.5px]  2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />{" "}
          <img
            className="lg:w-[100.5px] lg:h-[90.5px]  2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />
          <img
            className=" lg:w-[100.5px] lg:h-[90.5px] 2xl:w-[156px] 2xl:h-[147px]"
            src={pic2}
          />
        </div>
      </div>
      {/* Desciption */}
      <div className="mx-5 my-5">
        <h5 class=" text-xl pb-4 font-medium font-lexend  text-white">
          About me
        </h5>
        <span class=" text-lg justify-evenly font-normal font-lexend  text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fermentum tristique mollis. Donec porta purus sed arcu feugiat
          sagittis. Sed tristique eget turpis a feugiat. amet, consectetur
          adipiscing elit. Suspendisse fermentum tristique
        </span>
      </div>
    </>
  );
}
