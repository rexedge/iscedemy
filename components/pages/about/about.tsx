import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Image from "next/image";
import React from "react";

export default function AboutIsce() {
  return (
    <MaxWidthWrapper className="text-black grid gap-5">
      <div className="text-start">
        <div className="text-5xl font-bold ">{``}</div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 justify-center py-20">
        <div className="flex flex-col max-w-[500px]">
          <div className="flex flex-col gap-2 font-bold text-lg lg:text-xl  text-[34px] leading-normal ">
            <span>{`About us `}</span>
            <span className="font-normal text-black">
              {`At Mimo, we believe that coding can open doors to opportunities like few other skills. 
              That's why we've rallied around the purpose of making coding accessible to as many people as possible.`}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-light text-lg">
            <Image src="/arin.png" width={400} height={400} alt="arin"></Image>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}