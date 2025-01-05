 "use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { Globe } from "./globe";
import { Hero } from "./hero-homepage";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Homebody() {
  return (
    <div className="flex flex-col overflow-hidden mb-16">
      <Hero />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Develop Node.js Frameworks <br />
              <span className="text-4xl md:text-[6rem] font-bold leading-none">
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
      <div className="flex items-center justify-center px-20">
        <div className="flex justify-center items-center">
          <AnimatedTestimonials testimonials={frameworks} />
        </div>
          <Globe />
      </div>
    </div>
  );
}

const frameworks = [
  {
    quote:
      "React's component-based architecture has revolutionized how we build interactive UIs. It offers unparalleled flexibility and performance.",
    name: "React",
    designation: "Frontend JavaScript Library",
    src: "/frameworks/react.png",
  },
  {
    quote:
      "Next.js provides the perfect balance between server-side rendering and static site generation. It's a game-changer for SEO and performance.",
    name: "Next.js",
    designation: "Full-Stack React Framework",
    src: "/frameworks/nextjs.png",
  },
  {
    quote:
      "Express is the backbone of our backend services. Its simplicity and minimalistic design allow us to build fast, scalable APIs effortlessly.",
    name: "Express",
    designation: "Minimalist Node.js Framework",
    src: "/frameworks/express.png",
  },
  {
    quote:
      "Hono's lightweight framework is perfect for building ultra-fast APIs. Its performance and simplicity are unmatched.",
    name: "Hono",
    designation: "Fast Web Framework for Cloudflare Workers",
    src: "/frameworks/hono2.png",
  },
  {
    quote:
      "The seamless integration of technologies in the MERN stack empowers rapid full-stack development. It's our go-to choice for scalable applications.",
    name: "MERN Stack",
    designation: "Full-Stack JavaScript Solution",
    src: "/frameworks/node.png",
  },
];
