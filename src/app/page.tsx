
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { MdArrowForwardIos } from "react-icons/md";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-black">
      <nav className="max-w-4xl mx-4 sm:mx-auto h-fit z-10 flex items-center justify-between px-5 py-2.5 sm:px-8 sm:py-3 mt-4 rounded-md backdrop-blur-sm bg-teal-300/25">
        <a href="/" className="cursor-pointer">
          <Image src="/icon.svg" alt="Logo" className="w-8 h-8 sm:w-11 sm:h-11" width={40} height={40} />
        </a>
        <Link href="/dashboard" className="relative px-3.5 py-1.5 sm:px-7 sm:py-2.5 rounded-lg bg-blue-700 group">
          <span className="text-white font-medium sm:tracking-wide flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-2">Practice Now</span>
          <IconArrowUpRight size={20} strokeWidth={1} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white" />
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center pt-15">
        <h1 className="text-3xl md:text-5xl font-bold text-white opacity-90 text-center">
          JEE Exam Practice
        </h1>
        <p className="mt-4 text-md sm:text-lg text-white opacity-60 text-center px-20">
          Boost your preparation with free mock questions
        </p>

        <div className="w-fit h-fit border border-white/30 p-1.5 my-10">
          <div className="border border-dashed border-teal-300/50 px-4 sm:px-8 py-2 sm:py-4">
            <h1 className="text-white text-lg sm:text-2xl font-medium">Personalized Recommendations</h1>
            <p className="text-white opacity-70 text-md sm:text-lg font-medium">Get personalized questions that help you.</p>
            
            <div className="mt-8 px-5 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-800/95 w-full h-fit hover:scale-105 transition-all duration-400 cursor-pointer">
              <div className="flex gap-3 items-center">
                <div>
                  <Image src="/jee-main.png" alt="JEE Main" className="w-10 h-10" width={40} height={40} />
                </div>
                <div className="text-white">
                  <h1 className="font-bold tracking-wide">Take Mock Test</h1>
                  <p className="opacity-70 tracking-wide">JEE Main</p>
                </div>
              </div>
            </div>

            <div className="mt-4 px-5 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-800/95 w-full h-fit hover:scale-105 transition-all duration-400 cursor-pointer">
              <div className="flex gap-3 items-center">
                <div>
                  <Image src="/jee-advanced.png" alt="Jee Advanced" className="w-10 h-10" width={40} height={40} />
                </div>
                <div className="text-white">
                  <h1 className="font-bold tracking-wide">Practice Mock Test</h1>
                  <p className="opacity-70 tracking-wide">JEE Advance</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Link href="/dashboard" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 group">
          <div className="flex gap-2 items-center">
            <span>Start Practicing</span>
            <span className="transition-transform duration-400 group-hover:translate-x-2">
              <MdArrowForwardIos />
            </span>
          </div>
        </Link>
      </main>

    </div>
  )
}