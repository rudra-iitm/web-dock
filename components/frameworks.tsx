import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconApi,
  IconBolt,
  IconCode,
  IconFlower,
  IconLayersSelected,
  IconServer,
  IconSparkles,
} from "@tabler/icons-react";
import Image from "next/image";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { CreateDock } from "./create-dock";

export function Frameworks() {
  return (
    <BentoGrid className="max-w-4xl mx-auto text-white">
      {items.map((item, i) => (
        <Dialog key={i}>
          <DialogTrigger asChild>
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={`hover:cursor-pointer bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] text-white ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl text-white bg-black">
            <CreateDock />
          </DialogContent>
        </Dialog>
      ))}
    </BentoGrid>
  );
}

const SkeletonReact = () => (
  <div className="flex justify-center items-center w-full h-full rounded-xl">
    <Image
      src='/frameworks/react.png'
      alt='React'
      width={400}
      height={400}
      draggable={false}
      className="h-40 w-40 p-4 rounded-3xl"
    />
  </div>
);

const SkeletonNext = () => (
  <div className="flex justify-center items-center w-full h-full rounded-xl">
    <Image
      src='/frameworks/nextjs.png'
      alt='React'
      width={400}
      height={400}
      draggable={false}
      className="h-32 w-32 p-4 rounded-3xl"
    />
  </div>
);

const SkeletonExpress = () => (
  <div className="flex justify-center items-center w-full h-full rounded-xl">
    <Image
      src='/frameworks/express.png'
      alt='React'
      width={400}
      height={400}
      draggable={false}
      className="h-32 w-32 p-4 rounded-3xl"
    />
  </div>
);

const SkeletonHono = () => (
  <div className="flex justify-center items-center w-full h-full rounded-xl">
    <Image
      src='/frameworks/hono-large.png'
      alt='React'
      width={400}
      height={400}
      draggable={false}
      className="h-44 p-4 rounded-3xl"
    />
  </div>
);

const SkeletonNestJS = () => (
  <div className="flex justify-center items-center w-full h-full rounded-xl">
    <Image
      src='/frameworks/nestjs.png'
      alt='React'
      width={400}
      height={400}
      draggable={false}
      className="h-32 w-32 p-4 rounded-3xl"
    />
  </div>
);

const SkeletonTS = () => (
  <div className="flex justify-center items-center w-full h-full rounded-xl">
    <Image
      src='/frameworks/ts.png'
      alt='React'
      width={400}
      height={400}
      draggable={false}
      className="h-32 w-32 p-4 rounded-3xl"
    />
  </div>
);

const SkeletonNodeJS = () => (
  <div className="flex justify-center items-center w-full h-full rounded-xl">
    <Image
      src='/frameworks/nodejs-large.png'
      alt='React'
      width={400}
      height={400}
      draggable={false}
      className="h-44 w-64 p-4 rounded-3xl"
    />
  </div>
);

const items = [
  {
    title: "React: Building User Interfaces",
    description: "Learn how React simplifies the creation of dynamic UIs.",
    header: <SkeletonReact />,
    icon: <IconCode className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Next.js: Full-Stack React Framework",
    description: "Explore server-side rendering and static site generation with Next.js.",
    header: <SkeletonNext />,
    icon: <IconServer className="h-4 w-4 text-gray-400" />,
  },
  {
    title: "Express: Lightweight Web Framework",
    description: "Discover how to build robust APIs with Express.js.",
    header: <SkeletonExpress />,
    icon: <IconApi className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Hono: Ultrafast Web Framework",
    description: "Experience the speed and simplicity of Hono for modern web apps.",
    header: <SkeletonHono />,
    icon: <IconBolt className="h-4 w-4 text-yellow-400" />,
  },
  {
    title: "NestJS: Scalable Server-Side Apps",
    description: "Leverage TypeScript and modular architecture with NestJS.",
    header: <SkeletonNestJS />,
    icon: <IconLayersSelected className="h-4 w-4 text-red-500" />,
  },
  {
    title: "TypeScript: Radical Simplicity",
    description: "Build sleek, fast, and minimal apps with SvelteKit.",
    header: <SkeletonTS />,
    icon: <IconSparkles className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "Node JS: Elegant Middleware Framework",
    description: "Create web applications with robust and flexible middleware using Koa.",
    header: <SkeletonNodeJS />,
    icon: <IconFlower className="h-4 w-4 text-purple-500" />,
  },
];
