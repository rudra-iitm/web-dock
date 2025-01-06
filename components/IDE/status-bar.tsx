import { getFileIcon } from "../file-tree"

interface StatusBarProps {
    activeFile: string | null
  }
  
  export function StatusBar({ activeFile }: StatusBarProps) {
    return (
      <div className="h-6 border-t border-border px-4 flex items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          {activeFile && getFileIcon(activeFile)}
          {activeFile ? `${activeFile}` : 'No file selected'}
        </div>
      </div>
    )
  }
  
  