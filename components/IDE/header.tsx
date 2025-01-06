import { MiniBrowserDialog } from "../mini-browser-drawer"
import { Logo } from "../Logo"
import { UserButton } from "@clerk/nextjs"
import { TerminalDrawer } from "../terminal-drawer"
import { WebContainer } from "@webcontainer/api"

interface HeaderProps {
  iframeUrl: string | null
  webcontainerInstance: WebContainer | null
}

export function Header({ iframeUrl, webcontainerInstance }: HeaderProps) {
  return (
    <header className="h-12 border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
          <Logo logoSize="32" textSize="text-lg" />
      </div>
      
      <div className="flex items-center gap-2">
        {webcontainerInstance && <TerminalDrawer webcontainerInstance={webcontainerInstance} iframeUrl={iframeUrl}/>}
        <MiniBrowserDialog url={iframeUrl}/>
        <UserButton />
      </div>
    </header>
  )
}
