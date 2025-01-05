import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";

export async function NewDock() {
  return (
    <div className="size-full max-w-3xl text-white items-center justify-center overflow-hidden pt-8">
      <BoxReveal duration={1}>
        <p className="text-[3.5rem] font-semibold">
            Code and Run Node.js <span className="text-[#0A1F7D]"> in Your Browser</span>
        </p>
      </BoxReveal>

      <BoxReveal duration={0.5}>
        <h2 className="mt-[.5rem] text-[1.2rem]">
         Your browser-based development environment 
          <span className="text-[#0A1F7D] font-bold"> for Node.js frameworks.</span>
        </h2>
      </BoxReveal>

      <BoxReveal duration={0.5}>
        <Button className="mt-[1.6rem] bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] rounded-full">Create New Dock</Button>
      </BoxReveal>
    </div>
  );
}
