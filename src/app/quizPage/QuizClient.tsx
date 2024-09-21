'use client';

import { useState, useEffect } from 'react';

export default function QuizClient({ initialQuestion }) {
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestion);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const shuffled = shuffleArray(currentQuestion.options);
    setShuffledOptions(shuffled);
  }, [currentQuestion]);


  const loadNewQuestion = async () => {
    try {
      const res = await fetch('/api/randomQuestion');
      if (!res.ok) {
        throw new Error('Failed to fetch new question');
      }
      const data = await res.json();
      setCurrentQuestion(data);
    } catch (err) {
      setError('Unable to load new question.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">All Subjects Quiz</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="question-section">
        <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
        <ul className="options-list">
          {shuffledOptions.map((option, index) => (
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

// Shuffling function for options
function shuffleArray(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}
