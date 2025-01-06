interface StatusBarProps {
    activeFile: string | null
  }
  
  export function StatusBar({ activeFile }: StatusBarProps) {
    return (
      <div className="h-6 border-t border-border px-4 flex items-center text-xs text-muted-foreground">
        <div className="flex-1">
          {activeFile ? `File: ${activeFile}` : 'No file selected'}
        </div>
        <div>Ln 1, Col 1</div>
      </div>
    )
  }
  
  