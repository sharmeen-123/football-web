import React, { useState } from "react";
import Header from "../Components/Header";
import "../styles/font.css"
import "../styles/font.css"
import SidebarCreatePlayer from "../Components/sideBarCreatePlayer";




export default function AddItems() {

  const [openAddsubcatmodal, setopenAddsubcatmodal] = useState(false);
  const [opendeletemodal, setopendeletemodal] = useState(false);

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
  };


  return (
    <>
      <div className="flex-col w-full">
        {/* Page Header */}
        <Header title={"User Area"} />
        

        <div className="flex  divide-x xl:w-full ">
         
          <div className="w-full pr-12">
            <h3 className="text-xl font-medium text-white font-lexend whitespace-nowrap  ml-9 mt-[32px]"> Create Player</h3>
            
           
            <div className="flex items-center justify-start gap-10 mx-9 my-5 font-dm">
            <form>
        <div className="flex mt-3">
        
        <div className="flex-1 mr-2">
                <input
                type="text"
                class="bg-[#212121]   w-full m-4 text-white  text-sm py-4 px-5 block pl-10 p-2.5   border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Player Name"
                required=""
              />
              <input
                type="text"
                class="bg-[#212121]  w-full m-4 text-white  text-sm v block pl-10 p-2.5   border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Position"
                required=""
              />
              <input
                type="email"
                class="bg-[#212121]  w-full m-4 text-white  text-sm py-4 px-5 block pl-10 p-2.5   border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                required=""
              />

<div
                onClick={handleClick}
                className=" flex bg-[#212121] w-50 m-4 text-white  text-sm rounded-lg block  p-2.5   border-gray-600 placeholder-gray-400"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.625 0H4.375C1.95967 0.00224297 0.00224297 1.95967 0 4.375V30.625C0.00224297 33.0403 1.95967 34.9978 4.375 35H30.625C33.0403 34.9978 34.9978 33.0403 35 30.625V4.375C34.9978 1.95967 33.0403 0.00224297 30.625 0ZM4.375 33.25C2.92589 33.2484 1.7516 32.0741 1.75 30.625V21.4819L8.33472 14.8972C9.53175 13.7043 11.4682 13.7043 12.6653 14.8972L30.9834 33.2136C30.8651 33.23 30.7477 33.2499 30.625 33.25H4.375ZM33.25 30.625C33.2493 31.2871 32.9955 31.8848 32.5908 32.3465L20.4875 20.2443L22.3347 18.3972C23.5318 17.2043 25.4682 17.2043 26.6653 18.3972L33.25 24.9819V30.625ZM33.25 22.5074L27.9026 17.16C26.0223 15.2836 22.9777 15.2836 21.0974 17.16L19.2503 19.0071L13.9026 13.6599C11.9986 11.8416 9.00143 11.8416 7.09741 13.6599L1.75 19.0073V4.375C1.7516 2.92589 2.92589 1.7516 4.375 1.75H30.625C32.0741 1.7516 33.2484 2.92589 33.25 4.375V22.5074Z"
                    fill="white"
                  />
                </svg>

                <div className="ml-2 "> Upload Group Picture</div>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </div>
            
              <div className="flex ml-4">
                <div className="flex-1 ">
                <button
                    class="font-dm bg-white ml-2  content-center m-4 text-sm  w-full focus:outline-none font-normal rounded-[4px]  px-4 py-2 text-center"
                    type="button"
                  >
                    Cancel
                    </button>
                </div>

                <div className="flex-1 ">
                <button
                  class="font-dm items-center text-white bg-green-500 m-4 w-full text-sm  py-2 focus:outline-none font-normal rounded-[4px]  text-center"
                  type="button"
                >
                  Submit
                  </button>
                </div>
              </div>
              
               
            
            
            

                </div>


                <div className="flex-1 ml-2">
                <input
                type="email"
                class="bg-[#212121] w-full m-4 text-white  text-sm py-4 px-5 block pl-10 p-2.5   border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Father's Email"
                required=""
              />
              <input
                type="text"
                class="bg-[#212121] w-full m-4 text-white  text-sm py-4 px-5 block pl-10 p-2.5   border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="DOB"
                required=""
              />
              <input
                type="phone"
                class="bg-[#212121] w-full m-4 text-white  text-sm py-4 px-5 block pl-10 p-2.5   border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone Number"
                required=""
              />
                </div>
       
        </div>
        </form>
          
        </div>

      </div>

      <div
        id="defaultModal"
        onClick={() => setopenAddsubcatmodal(false)}
        class={!openAddsubcatmodal ? "hidden" : " flex absolute top-0 right-0 left-0  w-full h-screen   bg-black/0 justify-center items-center"}
      >
        <div
          id="defaultModal"

          class={!openAddsubcatmodal ? "hidden" : " flex absolute right-24 mb-3   z-50 w-[150px] h-[80px]   bg-white rounded-xl justify-center content-center items-center"}
        >
          
        </div>


      {/* Side bar */}
            
            
          </div>

          {/*skill cards */}
          <div className=" xl:w-4/12">
            <div className="ml-10 mr-10  2xl:grid 2xl:grid-cols-1 ">
                return <SidebarCreatePlayer />;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
















