"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function CoursesList() {
  const [dropDown, setdropDown] = useState(false);

  return (
    <div
      onMouseEnter={() => setdropDown(true)}
      onMouseLeave={() => setdropDown(false)}
    >
        <div className=" font-bold text-[15px]">Courses </div>
        <div
          className={`absolute ${
            dropDown ? "h-24 opacity-100" : "h-0 opacity-0"
          } overflow-clip justify-center w-24 py-5
		 items-center px-2 border border-[#4b3535] rounded -ml-5 bg-[#f5f3f3] transition-all duration-1000 ease-in-out flex flex-col gap-3 `}
        >
            <Link href="/" className=" font-bold text-[13px]">
              HTML
            </Link>
            <Link href="/" className=" font-bold text-[13px]">
              CSS
            </Link>
            <Link href="/" className=" font-bold text-[13px]">
              JAVASCRIPT
            </Link>
          </div>
    </div>
  );
}
