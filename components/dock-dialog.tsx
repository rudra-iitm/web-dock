import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function DockDialog() {
  return (
    <Dialog>
      <DialogContent className="max-h-[90vh] max-w-[60vw] p-0 md:min-h-[600px] md:min-w-[800px]">
        <DialogHeader className="sr-only">
          <DialogTitle>Choose The Framework</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}