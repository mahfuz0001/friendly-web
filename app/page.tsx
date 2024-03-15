import { Hero } from "@/components/site/hero";
import Image from "next/image";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/site/scroll";
import { BackgroundGradientAnimationDemo } from "@/components/site/gradient";

export default function Home() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {/* <Hero /> */}
      {/* <Boxes /> */}
      {/* <ScrollReveal /> */}
      <BackgroundGradientAnimationDemo />
    </div>
  );
}
