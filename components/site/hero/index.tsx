import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export function Hero() {
  const words = [
    {
      text: "Make",
    },
    {
      text: "more",
    },
    {
      text: "friends",
    },
    {
      text: "with",
    },
    {
      text: "Friendly.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen z-20">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Find the Perfect Online Friends.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 space-x-0 md:space-x-4 cursor-auto z-999">
        <Link
          href="https://discord.com/oauth2/authorize?client_id=1212371375289925634&permissions=34360118336&scope=bot+applications.commands"
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 flex items-center justify-center"
        >
          Add to your server
        </Link>
        <Link
          href="https://discord.gg/Cw57ZnsrFU"
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm flex items-center justify-center"
        >
          Support
        </Link>
      </div>
    </div>
  );
}
