"use client";
import React, { useState } from "react";
import CourseItem from "../courseitem";
import { COURSEITEM } from "@/lib/consts";
import { CircleDownArrow, CircleRightArrow } from "@/lib/icons";

export default function SideBar() {
  const [click, setClicked] = useState(false);
  return (
    <div className="hidden lg:inline text-left h-screen w-[16%]">
      <div className="pb-[10px] cursor-pointer ">
        <span onClick={() => setClicked(!click)}>
          {click ? (
            <div className="flex items-center gap-3 ">
              <h2 className="font-bold">All Courses</h2>
              {CircleRightArrow}
            </div>
          ) : (
            <div className="flex items-center gap-3 ">
              <h2 className="font-bold">All Courses</h2>
              {CircleDownArrow}
            </div>
          )}+
        </span>
      </div>
      <hr />
      <ul
        className={` ${
          click ? "h-[30px] " : "h-0"
        } text-[13px] tezxt-[#504f4f] flex gap-3 flex-col pt-[20px]`}
      >
        {COURSEITEM.map((course, k) => (
          <CourseItem key={k} link={course.link} name={course.name} />
        ))}
      </ul>
    </div>
  );
}
