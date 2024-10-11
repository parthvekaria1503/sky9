"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], answer: "8" },
  { question: "What is 10 - 4?", options: ["5", "6", "7", "8"], answer: "6" },
  { question: "What is 3 x 3?", options: ["6", "7", "8", "9"], answer: "9" },
  { question: "What is 12 ÷ 4?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "What is 15 - 6?", options: ["7", "8", "9", "10"], answer: "9" },
  { question: "What is 9 + 1?", options: ["8", "9", "10", "11"], answer: "10" },
  { question: "What is 6 x 7?", options: ["41", "42", "43", "44"], answer: "42" },
  { question: "What is 8 ÷ 2?", options: ["2", "3", "4", "5"], answer: "4" },
  { question: "What is 4 + 4?", options: ["7", "8", "9", "10"], answer: "8" },
  { question: "What is 5 x 2?", options: ["8", "9", "10", "11"], answer: "10" },
];

const getRandomQuestions = (num: number): Question[] => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Quiz = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(10).fill(""));
  const [quizFinished, setQuizFinished] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(60); // Timer in seconds

  useEffect(() => {
    const questions = getRandomQuestions(10);
    setRandomQuestions(questions);

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Automatically submit when time is up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, []);

  const handleAnswerChange = (answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    console.log("User Answers: ", userAnswers); // Log user answers
    console.log("Correct Answers: ", randomQuestions.map(q => q.answer)); // Log correct answers

    randomQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      console.log(`Checking Question ${index + 1}: User Answer: ${userAnswer}, Correct Answer: ${question.answer}`); // Debugging
      if (userAnswer === question.answer) {
        score++;
      }
    });

    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    alert(`Your score: ${score} / 10`);
    router.push('/dashboard');
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/quizback.jpg')" }} // Update with your background image path
    >
      <div className="max-w-2xl w-full bg-slate-950 text-white shadow-lg rounded-lg p-6">
        {quizFinished ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Score: {calculateScore()} / 10</h2>
            <button 
              onClick={handleSubmit} 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Dashboard
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">{randomQuestions[currentQuestionIndex]?.question}</h2>
            <div className="mt-4">
              {randomQuestions[currentQuestionIndex]?.options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={userAnswers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerChange(option)}
                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label className="text-gray-300">{option}</label>
                </div>
              ))}
            </div>
            <div className="mb-4 text-center">
              <span className="text-lg">Time Remaining: {timeRemaining}s</span>
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={userAnswers[currentQuestionIndex] === ""}
              className={`mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ${userAnswers[currentQuestionIndex] === "" ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {currentQuestionIndex < randomQuestions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
