import { Homebody } from "@/components/home-body";
import { Navbar } from "@/components/navbar";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
        <Homebody />
        <FlickeringGrid
        className="z-0 relative inset-0"
        squareSize={4}
        gridGap={12}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      </div>
    </div>
  )
}
