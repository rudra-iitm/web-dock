import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GlobeLock } from 'lucide-react';
import { Safari } from "./ui/safari";

interface MiniBrowserDialogProps {
  url: string | null;
}

export function MiniBrowserDialog({ url }: MiniBrowserDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 text-white"><GlobeLock /></Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[60vw] p-0 md:min-h-[600px] md:min-w-[800px]">
        <DialogHeader className="sr-only">
          <DialogTitle>Mini Browser</DialogTitle>
        </DialogHeader>
        <Safari
          url={url}
          className="h-[90vh] md:h-[80vh] max-w-[60vw]"
        />
      </DialogContent>
    </Dialog>
  )
}

