import { questions } from "@/data/questions";


export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
        JEE Exam Practice
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Boost your preparation with free mock questions
      </p>
    </main>
  );
}
