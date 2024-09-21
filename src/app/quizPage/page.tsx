"use client"
import prisma from '../../lib/prisma';
import { useState } from 'react';

// Shuffling function for options
function shuffleArray(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

export default async function QuizPage() {
  const questions = await getRandomQuestion(); // Fetch a random question from the database

  return (
    <QuizClient questions={questions} />
  );
}

// This function runs on the server to fetch a random question
async function getRandomQuestion() {
  const count = await prisma.question.count();
  const randomIndex = Math.floor(Math.random() * count);
  const question = await prisma.question.findMany({
    take: 1,
    skip: randomIndex,
  });

  return {
    id: question[0].id,
    question: question[0].question,
    options: [question[0].answer, ...generateRandomOptions()],
  };
}

// Dummy function to generate random options
function generateRandomOptions() {
  return ['Option A', 'Option B', 'Option C'];
}

// Client-side component for interactivity
function QuizClient({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(questions);

  const loadNewQuestion = async () => {
    const res = await fetch('/api/randomQuestion');
    const data = await res.json();
    setCurrentQuestion(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">All Subjects Quiz</h1>
      <div className="question-section">
        <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
        <ul className="options-list">
          {shuffleArray(currentQuestion.options).map((option, index) => (
            <li key={index} className="option-item">{option}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={loadNewQuestion}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next Question
      </button>
    </div>
  );
}
