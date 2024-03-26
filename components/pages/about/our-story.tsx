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
              <div className="font-light text-lg w-full rounded-xl overflow-clip">
                <Image
                  src="/jopwe.jpg"
                  width={400}
                  height={400}
                  alt="arin"
                  className="w-full object-cover"
                ></Image>
              </div>
            </div>
            <div className=" flex flex-col gap-10">
              <div className="">
                <span className="text-2xl  font-normal text-black flex flex-col">{`We exist specifically for our customers because 
we know heroes such as yourselves deserve only 
the best sidekicks.`}</span>
              </div>
              <div className="">
                <span className=" text-2xl">{`We believe that everyone has the right to 
change the world we want to give the younger 
generation the ability to affect their world using 
tech.`}</span>
              </div>
              <div className="">
                <span className="text-2xl">{`We believe in child education because the only 
way to really change the current world for the 
better is by enabling them to paint a world of 
their own.
`}</span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
