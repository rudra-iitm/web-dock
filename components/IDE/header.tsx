import { MiniBrowserDialog } from "../mini-browser-drawer";
import { Logo } from "../Logo";
import { UserButton } from "@clerk/nextjs";
import { TerminalDrawer } from "../terminal-drawer";
import { WebContainer } from "@webcontainer/api";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";

interface HeaderProps {
  iframeUrl: string | null;
  webcontainerInstance: WebContainer | null;
  setIframeUrl: (url: string) => void;
}

const loadingStates = [
  { text: "Setting up Environment" },
  { text: "Installing Dependencies" },
  { text: "Starting Dev Server" },
  { text: "Server Ready" },
];

export function Header({
  iframeUrl,
  webcontainerInstance,
  setIframeUrl,
}: HeaderProps) {
  const [serverStart, setServerStart] = useState(false);
  const [serverRunning, setServerRunning] = useState(false);

  const startDevServer = async () => {
    if (webcontainerInstance && !serverRunning) {
      setServerStart(true);

      try {
        setServerStart(true);
        const installProcess = await webcontainerInstance.spawn("npm", ["install"]);

        await installProcess.exit;

        await webcontainerInstance.spawn("npm", ["run", "dev"]);
        
        webcontainerInstance.on("server-ready", (port, url) => {
          setIframeUrl(url);
          setServerRunning(true);
        });

        setServerStart(false);
      } catch (error) {
        console.error("Error starting server:", error);
      }
    }
  };

  return (
    <header className="h-12 border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Logo logoSize="32" textSize="text-lg" />
      </div>

      {!serverRunning && (
        <Button
          className="bg-gradient-to-r from-[#0A1F7D] to-[#020B3F]"
          onClick={startDevServer}
          disabled={serverStart}
        >
          <FaPlay /> Run
        </Button>
      )}

      <Loader loadingStates={loadingStates} loading={serverStart} duration={3000} loop={false} />

      {serverRunning && (
        <Button disabled variant="destructive" className="hover:cursor-not-allowed text-white">
          ✅ Server Running
        </Button>
      )}

      <div className="flex items-center gap-2">
        {webcontainerInstance && (
          <TerminalDrawer webcontainerInstance={webcontainerInstance} iframeUrl={iframeUrl} />
        )}
        <MiniBrowserDialog url={iframeUrl} />
        <UserButton />
      </div>
    </header>
  );
}
