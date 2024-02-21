import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import AboutIsce from "@/components/pages/about/about";
import WhyChooseIsce from "@/components/pages/about/about";
import AboutNav from "@/components/pages/about/about-nav";
import OurBlog from "@/components/pages/about/our-blog";
import OurStory from "@/components/pages/about/our-story";
import OurValues from "@/components/pages/about/our-values";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <MaxWidthWrapper className="text-black grid gap-5 relative ">
      <AboutIsce />
      <AboutNav />
      <OurStory />
      <OurValues />
      <OurBlog />
    </MaxWidthWrapper>
  );
}
