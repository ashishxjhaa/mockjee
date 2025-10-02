
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-black">
      <nav className="max-w-5xl mx-4 sm:mx-auto h-fit z-10 flex items-center justify-between px-5 py-2.5 sm:px-8 sm:py-3 mt-4 rounded-sm backdrop-blur-sm bg-teal-300/25">
        <a href="/" className="cursor-pointer">
          <Image src="/icon.svg" alt="Logo" className="w-8 h-8 sm:w-11 sm:h-11" width={40} height={40} />
        </a>
        <Link href="/dashboard" className="relative px-3.5 py-1.5 sm:px-7 sm:py-2.5 rounded-lg bg-blue-700 group">
          <span className="text-white font-medium sm:tracking-wide flex items-center gap-2 transition-transform duration-500 ease-in-out group-hover:-translate-x-2">Practice Now</span>
          <IconArrowUpRight size={20} strokeWidth={1} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white" />
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center pt-15">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
        JEE Exam Practice
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Boost your preparation with free mock questions
      </p>

      {/* CTA Button */}
      <Link
        href="/dashboard"
        className="mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Start Practicing →
      </Link>
    </main>


    </div>
  )
}