import React, { useState } from "react";
import pfp from "../assets/pfp.png";
import pic1 from "../assets/pic1.png"
import "../styles/font.css"
import axios from '../axios';
import GroupMembers from "./GroupMembers";
export default function RecentActivityies(props) {
  const [post, SetPost] = useState(false);
  const [recent, setRecent] = useState(false);
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })


  // getting all posts
  const memberName = async () => {
      let res = await axios.get('/newsfeed/getnewsfeed')
      .then ( (res) => {
        
        if (res.data.data !== res.data.data.Prototype){
          let member = (res.data.data);
          SetPost(member.reverse());
         
        }
        }
      )
      .catch((error) => {
          console.log(error);
      })
    
    
  }
  memberName()

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
        {post === false ? (<></>): (<>
          {post.map((val, ind) => (
          <>
          {val.post.date === date? (<>

            {Math.floor((val.post.time-time)/(24*3600*1000)) < 60? (<>
              <p>helloo</p>
            </>):(<></>)}
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




          </>) : (<></>)}
          </>
          
          
        ))}</>)}
        
      </div>
    </>
  );
}
