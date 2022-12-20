import React from "react";
import { useState, useEffect, useContext } from "react";
import grouplist from "../assets/grouplist.png";
import "../styles/font.css";
import axios from "axios";
import { AuthContext } from "../admin/ActiveUser";

export default function GroupList() {
  const [groups, setGroup] = useState(false);
  const {id, setActiveId } = useContext(AuthContext);

  const api = axios.create({
    baseURL : 'http://localhost:8000'
  });

  useEffect (()=>{

    data();
  },[])

  const data = async() => {
    let email = id;
    let res = await api.get("/groups/getgroup/"+ email)
    .then((res) => {
      if (res.data.data !== res.data.data.Prototype){
        setGroup(res.data.data);

      }})
    .catch((error) => {
        console.log(error.response.data);
        
    })
  }
  return (
    <>
      <div className=" font-lexend flex items-center justify-between mb-7  mt-10">
        <h4 class="self-center text-lg font-normal font-lexend whitespace-nowrap text-white ">
          Groups
        </h4>
        <a href="/newsfeed/groups" class="text-sm text-gray-500 ml-auto">All</a>
      </div>
      {groups === false ? (<></>) : (<>
        {groups.map((val, ind) => (
        <a href="/newsfeed/selectedGroup" className="flex gap-4 mb-6 items-center ">
          <img
            class=" w-16 h-16 rounded-md "
            src={val.pic}
            alt="Bonnie image"
          />
          <div>
            <h4 class="self-center text-lg font-normal font-lexend whitespace-nowrap text-white  ">
              {val.name}
            </h4>
            <div className="flex items-center gap-2  mt-1">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#1DB954" />
              </svg>
              <p class="font-normal font-lexend text-left text-sm text-gray-400">
                {val.members.length} members in it
              </p>
            </div>
          </div>
        </a>
      ))}</>)}
      
    </>
  );
}
