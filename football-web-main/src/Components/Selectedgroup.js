import React from "react";
import GroupList from "../Components/GroupList";
import Header from "../Components/Header";
import "../styles/scrollbar.css"
import MoreProfiles from "../Components/MoreProfiles";
import RecentActivityies from "../Components/RecentActivityies";
import TimelinePost from "../Components/TimelinePost";
import GroupMembers from "./GroupMembers";
import "../styles/font.css"

import UploadPostOntimeline from "./UploadPostOntimeline";
export default function Selectedgroup() {
  return (
    <div className="flex-col w-full ">
      {/* Page Header */}
      <Header title={"Group Title"} />
      <div className="flex  divide-x divide-[#7E7E7E] h-screen">
        {/* left side-bar details  */}
        <div className="w-1/4 ml-6 mt-10 mr-2">
          <GroupMembers/>
        </div>

        {/* center Post */}
        <div className=" w-full overflow-y-scroll scrollbar  mt-10">
         <UploadPostOntimeline/>
          <TimelinePost />
        </div>

        {/* right side-bar parent profile */}

        <div className="mr-8 w-4/12  mt-10 pl-8">
          <MoreProfiles />
          <GroupList />
        </div>
      </div>
    </div>
  );
}
