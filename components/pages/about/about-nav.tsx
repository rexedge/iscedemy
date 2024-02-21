import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function AboutNav() {
  return (
    <MaxWidthWrapper className="sticky top-0 grid grid-cols-4 bg-gray-500">
      <Link
        href={"/about#our-story"}
        className="border-b-2 hover:border-black py-2 text-center flex gap-2 justify-center items-center"
      >
        <HamburgerMenuIcon />
        Our Story
      </Link>
      <Link
        href={"/about#our-values"}
        className="border-b-2 hover:border-black py-2 text-center flex gap-2 justify-center items-center"
      >
        <HamburgerMenuIcon />
        Our Values
      </Link>
      <Link
        href={"/about#"}
        className="border-b-2 hover:border-black py-2 text-center flex gap-2 justify-center items-center"
      >
        <HamburgerMenuIcon />
        Button 3
      </Link>
      <Link
        href={"/about#"}
        className="border-b-2 hover:border-black py-2 text-center flex gap-2 justify-center items-center"
      >
        <HamburgerMenuIcon />
        Button-4
      </Link>
    </MaxWidthWrapper>
  );
}
