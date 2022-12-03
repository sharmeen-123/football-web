import React from "react";
import Header from "../Components/Header";
import "../styles/font.css"
import { skillsdata } from "../Components/Skills";
import AddSubSkill from "../Components/AddSubSkill";

export default function AddSkill() {
  return (
    <>
      <div className="flex-col w-full">
        {/* Page Header */}
        <Header title={"Players Area"} />
        {/* Title Of the Page */}
        <div className="flex justify-between mx-9 mt-8 mb-[51px]">
          <h4 class="font-lexend self-center text-xl font-semibold whitespace-nowrap text-white   ">
            Skills Evaluations
          </h4>
          <a
            href="/playerarea/addskill"
            class="text-white font-light bg-green-500 font-dm  focus:outline-none  rounded-[4px] text-base px-5 py-2 text-center inline-flex items-center"
            type="button"
          >
            Go to evaluation
          </a>
        </div>

        {/* Cards oF CAtogerys  */}
        <div className="m-8  grid lg:grid-cols-5 2xl:grid-cols-5  sm:gap-4 lg:gap-4 2xl:gap-y-8">
          {skillsdata.map((val, ind) => {
            return (
              <AddSubSkill
                key={ind}
                subcat={val.cat}
                name={val.name}
                img={val.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
