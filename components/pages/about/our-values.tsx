import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import Image from "next/image";
import React from "react";

export default function OurValues() {
  return (
    <div id="our-values">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 gap-16 justify-center py-20">
          <div className="">
            <div className="text-start pb-10 ">
              <div className="text-2xl font-bold ">{`Our Values`}</div>
            </div>
            <div className="font-light text-lg ">
              <Image
                src="/jopwe.jpg"
                width={400}
                height={400}
                alt="arin"
              ></Image>
            </div>
          </div>
          <div className=" flex flex-col gap-10">
            <div className="">
              <span className="font-normal text-black flex flex-col">{`Frustrated with the one-size-fits-all approach and steep learning curve for building tech skills, Mimo’s founders came together to create something better.`}</span>
            </div>
            <div className="">
              <span className="">{`Five years later, we’ve grown into a diverse group of teachers, engineers, strategists, and designers, who’ve helped over six million people take their first step towards learning to code.`}</span>
            </div>
            <div className="">
              <span className="">{`Our Pro subscribers enable us to teach crucial tech skills to millions of people worldwide for free. `}</span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
