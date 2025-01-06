import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { TerminalIcon } from "lucide-react";
import Terminal from "./ui/terminal";
// import { MiniBrowserDialog } from "./mini-browser-drawer";
import { WebContainer } from "@webcontainer/api";
import { MiniBrowserDialog } from "./mini-browser-drawer";

export const TerminalDrawer = ({webcontainerInstance, iframeUrl}: {webcontainerInstance: WebContainer, iframeUrl: string | null}) => {
  return (
    <Drawer>
    <DrawerTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 text-white"><TerminalIcon /></Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="w-full h-full px-16">
        <DrawerHeader>
          <DrawerTitle>
            <div className="flex items-center justify-between">
              <div>
                Terminal
              </div>
              <MiniBrowserDialog  url={iframeUrl}/>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="w-full h-[calc(100%-140px)]">
          <Terminal webcontainerInstance={webcontainerInstance}/>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
  )
}
