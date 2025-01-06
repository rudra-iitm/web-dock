import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { MdOutlineRefresh } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { GrCloudUpload } from "react-icons/gr";
import { IoIosAddCircle } from "react-icons/io";
import { TiTabsOutline } from "react-icons/ti";
import { DialogClose } from "@radix-ui/react-dialog";

export interface SafariProps {
  url?: string | null;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function Safari({
  url,
  className = "",
}: SafariProps) {
  return (
    <div 
      className={`flex h-full w-full flex-col overflow-hidden rounded-lg border border-black bg-background ${className}`}
    >
      {/* Browser Chrome */}
      <div className="flex h-[52px] min-h-[52px] items-center border-b border-border bg-black px-4">
        {/* Window Controls */}
          <div className="flex items-center justify-start space-x-2 px-4 py-2">
          <DialogClose asChild>
            <div className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer">
            </div>
          </DialogClose>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

        {/* Navigation Controls */}
        <div className="hidden items-center gap-2 sm:flex ">
          <button 
            className="rounded-md p-1 text-muted-foreground hover:bg-accent text-white"
            aria-label="Go back"
          >
            <CiCircleChevLeft />
          </button>
          <button 
            className="rounded-md p-1 text-muted-foreground hover:bg-accent text-white"
            aria-label="Go forward"
          >
            <CiCircleChevRight />
          </button>
          <button 
            className="rounded-md p-1 text-muted-foreground hover:bg-accent text-white"
            aria-label="Refresh page"
          >
            <MdOutlineRefresh />
          </button>
        </div>

        {/* URL Bar */}
        <div className="mx-8 flex flex-1 items-center rounded-md bg-[#E5E5E5] px-3 py-1.5 dark:bg-[#404040]">
          <FaShieldAlt className="text-slate-600" />
          <span className="px-2 truncate text-sm text-muted-foreground">
          {url && url.trim().length > 30 ? `${url.trim().substring(0, 30)}...` : url?.trim() || "loading..."}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="hidden items-center gap-2 sm:flex">
          <button 
            className="rounded-md p-1 text-muted-foreground hover:bg-accent text-white"
            aria-label="Share"
          >
            <GrCloudUpload />
          </button>
          <button 
            className="rounded-md p-1 text-muted-foreground hover:bg-accent text-white"
            aria-label="New window"
          >
            <IoIosAddCircle />
          </button>
          <button 
            className="rounded-md p-1 text-muted-foreground hover:bg-accent text-white"
            aria-label="New window"
          >
            <TiTabsOutline />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex-1 bg-[#282c34]">
        <iframe
          className="absolute h-full w-full border-0"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          src={url ?? undefined}
        />
      </div>
    </div>
  );
}
