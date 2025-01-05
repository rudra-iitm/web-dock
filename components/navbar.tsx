"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarMenu className="top-6" />
    </div>
  );
}

function NavbarMenu({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", "transition-all duration-300", "shadow-[0_0_50px_rgba(10,31,125,0.5)]", className)}
    >
      <Menu setActive={setActive}>

        <div className="flex items-center space-x-4 my-auto">
         <div className="md:mr-10">
          <Logo textSize={'xl'} logoSize={'40'} />
         </div>
        <MenuItem setActive={setActive} active={active} item="Code">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/editor">New Project</HoveredLink>
            <HoveredLink href="/run">Run Code</HoveredLink>
            <HoveredLink href="/projects">My Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Learn">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/tutorials">Node.js Tutorials</HoveredLink>
            <HoveredLink href="/docs">API Documentation</HoveredLink>
            <HoveredLink href="/examples">Code Snippets</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Community">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/forum">Discussion Forum</HoveredLink>
            <HoveredLink href="/showcase">Project Showcase</HoveredLink>
            <HoveredLink href="/blog">Web Dock Blog</HoveredLink>
          </div>
        </MenuItem>
        <SignedOut>
          <MenuItem setActive={setActive} active={active} item="Account">
            <div className="flex flex-col space-y-4 text-sm">
              <SignInButton>
                <button className="px-4 py-2 font-semibold text-white transition-transform hover:scale-105 bg-[#020B3F] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 duration-200">
                  Log In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-4 py-2 font-semibold text-[#020B3F] transition-transform hover:scale-105 bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 duration-200">
                  Create an Account
                </button>
              </SignUpButton>
            </div>
          </MenuItem>
        </SignedOut>
        <SignedIn>
            <div className="flex flex-col space-y-4 text-sm">
              <UserButton afterSignOutUrl='/' />
            </div>
        </SignedIn>
        </div>
      </Menu>
    </div>
  );
}
