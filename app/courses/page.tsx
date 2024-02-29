"use client";
import CourseHeader from "@/components/courseheader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { COURSEHEADER, COURSELIST } from "@/lib/consts";
import { ArrowRightIcon, SearchIcon } from "@/lib/icons";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Key } from "lucide-react";
import CourseList from "@/components/courselist";

export default function CoursesPage() {
  return (
    <main className="lg:w-[83%] flex flex-col">
      <div className="w-full mt-5">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {COURSEHEADER.map((value, k) => (
              <CourseHeader
                key={k}
                image={value.image}
                header={value.header}
                description={value.description}
                link={value.link}
              />
            ))}
          </CarouselContent>
        </Carousel>
        <div className="grid gap-3 mt-6 mb-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {COURSELIST.map((value, k) => (
            <CourseList
              key={k}
              image={value.image}
              content={value.content}
              title={value.title}
              link={value.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
