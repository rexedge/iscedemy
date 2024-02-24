import React from "react";
import CourseItem from "../courseitem";
import { COURSEITEM } from "@/lib/consts";

export default function SideBar() {
  return (
    <div className="hidden lg:inline text-left h-screen w-[16%]">
      <h2 className="font-bold pb-[10px]">All Courses</h2>
      <hr />
      <ul className="text-[13px] text-[#504f4f] flex gap-3 flex-col pt-[20px] ">
        {COURSEITEM.map((course, k) => (
          <CourseItem key={k} link={course.link} name={course.name} />
        ))}
      </ul>
    </div>
  );
}
