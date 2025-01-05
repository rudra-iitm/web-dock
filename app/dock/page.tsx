import { CodeBlockFun } from "@/components/code-block";
import { Frameworks } from "@/components/frameworks";
import { NewDock } from "@/components/new-dock";

export default function Home() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center">
            <NewDock />
        </div>
        <div className="mt-20">
          <CodeBlockFun />
        </div>
        <div className="py-20">
        <Frameworks />
        </div>
    </div>
  )
}
