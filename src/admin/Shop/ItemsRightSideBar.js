import React from "react";
import { useState } from "react";
import "../../styles/font.css"
import Product from "../../assets/Product.png"
import Shirt from "../../assets/ShirtSidebar.png"
export default function ItemsRightSidebar() {
    const[edit,setEdit] = useState(false);

  function click(){
    setEdit(true);
    console.log(edit)
  }
    
    
  return (

    
    <div >
      {/* Parent Profile Card */}
      <div className="">
        <div className="flex">
            <div className="flex-1">
            <h2 class="self-center font-lexend text-lg font-medium whitespace-nowrap text-white ml-3 mt-8 ">
                Details
            </h2>
            </div>
            <div className="flex-1 grow-0 ">
                <div className="flex ml-3 mt-7 " onClick={click} >
                    <div className="flex-1 mt-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.6667V16H3.33333L13.1553 6.17796L9.82199 2.84472L0 12.6667ZM15.7334 3.59992C16.0889 3.24447 16.0889 2.71101 15.7334 2.35555L13.6445 0.266594C13.289 -0.0888645 12.7555 -0.0888645 12.4001 0.266594L10.7556 1.91113L14.0889 5.24438L15.7334 3.59992Z" fill="white"/>
                    </svg>

                    </div>
                    <div className="flex-1 text-white p-2">
                        <p>Edit</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="overflow-x-auto   font-lexend relative  my-5 font-dm rounded-xl ">
          
                <div className="rounded-md"> 
                <img src = {Shirt} />

                </div>
                <div>
                
                <p className="text-[#7E7E7E] mt-3">Product Name</p>
                {edit === false ? (
              <>
                <input type={"text"} 
                value={"Nike Drifit Shirt"} 
                disabled
                class="self-center bg-[#121212] font-lexend text-lg font-medium whitespace-nowrap text-white  "
                     />
                
              </>
            ) : (
              <div>
                <input type={"text"} 
                placeholder={"Nike Drifit Shirt"} 
                disabled = {false}
                class="self-center font-lexend bg-[#121212] text-lg font-medium whitespace-nowrap text-white border-hidden  "
                     />
              </div>
            )}
                
                </div>
                <div className="flex text-[#7E7E7E] mt-7">
                    <div className="flex-1">
                        <p>Price</p>
                    </div>
                    <div className="flex-1">
                        <p>Status</p>
                    </div>
                </div>

                <div className="flex text-white mt-5">
                    <div className="flex-1 text-lg text-bold">
                        <p>£500.56</p>
                    </div>
                    <div className="flex-1 text-sm">
                        <p>Available (In stock)</p>
                    </div>
                </div>
                <div>
                <p className="text-[#7E7E7E] mt-5">Quantity</p>
                <h3 class="self-center font-lexend  whitespace-nowrap text-white  mt-3">
                    45 items
                    </h3>
                </div>
       
            
        </div>
        
        </div>
    </div>
  );
}

