import { CodeBlockFun } from "@/components/code-block";
import { Frameworks } from "@/components/frameworks";
import { NewDock } from "@/components/new-dock";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn()

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
