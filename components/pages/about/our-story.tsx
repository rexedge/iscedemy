import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <div id="our-story">
      <MaxWidthWrapper>
        <div className="">
          {/* <Tabs
            defaultValue="account"
            className="w-full items-center justify-between sticky top-0 "
          >
            <TabsList>
              <TabsTrigger value="account">Our Stroy</TabsTrigger>
              <TabsTrigger value="password">Our blog</TabsTrigger>
              <TabsTrigger value="pass">Our team</TabsTrigger>
              <TabsTrigger value="word">Open positions</TabsTrigger>
            </TabsList>
          </Tabs> */}

          <div className="grid md:grid-cols-2 gap-16 justify-center py-20">
            <div className="">
              <div className="text-start pb-10 ">
                <div className="text-2xl font-bold ">{`Our Story`}</div>
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
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
