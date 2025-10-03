"use client";

import { useState } from "react";

type Question = {
    id: number;
    question: string;
    options: string[];
    answer: string;
};

export default function Quiz({ questions, setSelectedQuiz }: { questions: Question[], setSelectedQuiz: any }) {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleAnswer = (option: string) => {
        setSelectedOption(option);

        if (option === questions[current].answer) {
            setScore((prev) => prev + 1);
        }

        setTimeout(() => {
            setSelectedOption(null);
            if (current < questions.length - 1) {
                setCurrent((prev) => prev + 1);
            } else {
                setFinished(true);
            }
        }, 1000);
    };

    if (finished) {
        return (
            <>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
                <h2 className="text-xl font-bold mb-4 text-black">Quiz Finished 🎉</h2>
                <p className="text-lg text-gray-600">
                    You scored{" "}
                    <span className="font-bold text-black">{score}</span> 
                        {" "}out of{" "}
                    <span className="font-bold text-black">{questions.length}</span>
                </p>
            </div>
            <div onClick={() => setSelectedQuiz(null)} className="text-black font-medium tracking-wide hover:underline hover:underline-offset-2 cursor-pointer">Back to Dashboard</div>
            </>
        );
    }

    return (
        <>
        <div className="p-6 bg-white rounded-xl shadow-md w-[350px]">
            <h2 className="font-bold mb-4 text-black">{questions[current].question}</h2>
            <div className="flex flex-col gap-2">
                {questions[current].options.map((opt) => (
                    <button key={opt} onClick={() => handleAnswer(opt)} disabled={!!selectedOption} className={`border rounded px-4 py-2 cursor-pointer ${selectedOption ? opt === questions[current].answer ? "bg-green-200 text-black" : opt === selectedOption ? "bg-red-200 text-black" : "" : "text-black border-gray-400 hover:bg-gray-100" }`}>
                        {opt}
                    </button>
                ))}
            </div>
            <p className="mt-3 text-sm text-gray-500">
                Question {current + 1} of {questions.length}
            </p>
        </div>
        <div onClick={() => setSelectedQuiz(null)} className="text-black font-medium tracking-wide hover:underline hover:underline-offset-2 cursor-pointer">Back to Dashboard</div>
        </>
    );
}
