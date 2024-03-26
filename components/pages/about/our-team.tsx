import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

export default function OurTeam() {
  return (
    <div id="our-team" className="h-[100svh]">
        <div className="">
          <div className="grid md:grid-cols-2 gap-16 justify-center py-20">
            <div className="">
              <div className="font-light text-lg w-full rounded-xl overflow-clip">
                <Image
                  src="/christina.jpg"
                  width={400}
                  height={400}
                  alt="arin"
                  className="w-full object-cover"
                ></Image>
              </div>
            </div>
            <div className=" flex flex-col gap-10">
              <div className="">
                <div className="text-start pb-10 ">
                  <div className="text-2xl font-bold text-center ">{`Our team`}</div>
                </div>
                <span className="text-2xl  font-normal text-black flex flex-col">{`We exist specifically for our customers because we know heroes such as yourselves deserve only the best sidekicks.`}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
