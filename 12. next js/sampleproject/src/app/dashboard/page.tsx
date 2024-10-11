"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the Quiz interface
interface Quiz {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

const quizzes: Quiz[] = [
  {
    imgSrc: "/history.jfif",
    title: "History Quiz",
    description: "Test your knowledge of history.",
    link: "#", // Replace with the correct route
  },
  {
    imgSrc: "/geo.jfif",
    title: "Geography Quiz",
    description: "Explore the world through geography.",
    link: "#", // Replace with the correct route
  },
  {
    imgSrc: "/math.png",
    title: "Maths Quiz",
    description: "Challenge your math skills.",
    link: "../quiz/quizmath/", // Ensure this path is correct
  },
];

const QuizCard: React.FC<{ quiz: Quiz }> = ({ quiz }) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href={quiz.link}>
      <Image
        src={quiz.imgSrc}
        alt={quiz.title}
        width={1350}
        height={500}
        quality={100}
      />
    </Link>
    <div className="p-5">
      <Link href={quiz.link}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {quiz.title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {quiz.description}
      </p>
      <Link
        href={quiz.link}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Start Quiz
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("signupFormData");
    if (!user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  return (
    <div className="w-full relative">
      <Image
        src="/dashboardimg.jpg"
        alt="Dashboard background"
        width={1350}
        height={500}
        quality={100}
      />
      <div className="absolute top-16 left-1/4">
        <h1 className="text-6xl bg-slate-900 text-white p-2 rounded">
          Welcome to Quiz Game
        </h1>
      </div>
      <div className="absolute top-1/3 w-full text-center mt-2">
        <div className="flex flex-row justify-between bg-slate-950">
          {quizzes.map((quiz, index) => (
            <QuizCard key={index} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
