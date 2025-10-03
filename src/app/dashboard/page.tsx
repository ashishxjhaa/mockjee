"use client";

import { useState } from "react";
import Image from "next/image";
import { mainsQuestions, advancedQuestions } from "@/data/questions";
import Quiz from "@/data/Quiz";


export default function Dashboard() {

    const [selectedQuiz, setSelectedQuiz] = useState<"mains" | "advanced" | null>(null);

    return (
        <div className="min-h-screen bg-[#F6F6EF] flex items-center justify-center flex-col gap-10">
            <h1 className="text-xl sm:text-3xl font-bold tracking-wide text-center text-black opacity-80">
                JEE Entrance Examination
            </h1>

            {selectedQuiz ? (
                selectedQuiz === "mains" ? ( 
                    <Quiz questions={mainsQuestions} setSelectedQuiz={setSelectedQuiz} />
                ) : (
                    <Quiz questions={advancedQuestions} setSelectedQuiz={setSelectedQuiz} />
                )

            ): (

            <div className="flex flex-col sm:flex-row gap-5">
                <div onClick={() => setSelectedQuiz("mains")} className="flex flex-col gap-3 w-fit h-fit p-4 sm:p-6 rounded-xl bg-white hover:-translate-y-2 hover:shadow-lg transition-transform duration-550 shadow-[#FE6603]/50">
                    <div className="flex gap-3 items-center">
                        <Image src="/jee-main.png" alt="JEE Main" className="w-10 h-10" width={40} height={40} />
                        <div className="flex flex-col">
                            <div className="text-black tracking-wide">JEE Main</div>
                            <div className="text-black text-sm opacity-65">Previous Years Questions with Solutions</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-sm border border-gray-300 rounded-lg text-green-600 px-8 py-1.5 cursor-pointer">Paper Wise</div>
                        <div className="text-sm border border-gray-300 rounded-lg text-red-600 px-8 py-1.5 cursor-pointer">Chapter Wise</div>
                    </div>
                    <div className="text-md border border-gray-300 rounded-lg text-blue-600 px-9 py-1 cursor-pointer">Practice Mock Test or Revise</div>
                </div>

                <div onClick={() => setSelectedQuiz("advanced")} className="flex flex-col gap-3 w-fit h-fit p-4 sm:p-6 rounded-xl bg-white hover:-translate-y-2 hover:shadow-lg transition-transform duration-550 shadow-[#FE6603]/50">
                    <div className="flex gap-3 items-center">
                        <Image src="/jee-advanced.png" alt="Jee Advanced" className="w-10 h-10" width={40} height={40} />
                        <div className="flex flex-col">
                            <div className="text-black tracking-wide">JEE Advanced</div>
                            <div className="text-black text-sm opacity-65">Previous Years Questions with Solutions</div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-sm border border-gray-300 rounded-lg text-green-600 px-8 py-1.5 cursor-pointer">Paper Wise</div>
                        <div className="text-sm border border-gray-300 rounded-lg text-red-600 px-8 py-1.5 cursor-pointer">Chapter Wise</div>
                    </div>
                    <div className="text-md border border-gray-300 rounded-lg text-blue-600 px-9 py-1 cursor-pointer">Practice Mock Test or Revise</div>
                </div>
            </div>
            )}
        </div>
    );
}
