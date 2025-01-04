 "use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { Globe } from "./globe";

export function Homebody() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Develop Node.js Frameworks <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Directly in Your Browser
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/code.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <Globe />
    </div>
  );
}
