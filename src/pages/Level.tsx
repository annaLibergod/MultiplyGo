import { useEffect, useState } from "react";

import "../App.css";

import { useNavigate, useParams } from "react-router-dom";

import QuestionCard from "../components/QuestionCard";

type Level = {
  id: string;
  name: string;
  maxFirstNumber: number;
};

const levels: Level[] = [
  {
    id: "0-3",
    name: "0-3",
    maxFirstNumber: 3,
  },
  {
    id: "0-4",
    name: "0-4",
    maxFirstNumber: 4,
  },
  {
    id: "0-5",
    name: "0-5",
    maxFirstNumber: 5,
  },
  {
    id: "0-6",
    name: "0-6",
    maxFirstNumber: 6,
  },
  {
    id: "0-7",
    name: "0-7",
    maxFirstNumber: 7,
  },
  {
    id: "0-8",
    name: "0-8",
    maxFirstNumber: 8,
  },
  {
    id: "0-10",
    name: "0-10",
    maxFirstNumber: 10,
  },
];

const questionsPerPage = 4;

export type Question = {
  firstNumber: number;
  secondNumber: number;
  operation: "multiply" | "divide";
  answer: number;
};

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Level() {
  const { levelId } = useParams();
  const navigate = useNavigate();

  const currentLevel = levels.find((level) => level.id === String(levelId));

  const [gameId, setGameId] = useState(0);

  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);

  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(questionsPerPage).fill(null),
  );

  const [gameCompleted, setGameCompleted] = useState(false);

  function generateQuestions() {
    if (!currentLevel) {
      return;
    }

    const questions: Question[] = [];

    for (let i = 0; i < questionsPerPage; i++) {
      const operation = Math.random() < 0.5 ? "multiply" : "divide";

      if (operation === "multiply") {
        const firstNumber = getRandomNumber(0, currentLevel.maxFirstNumber);

        const secondNumber = getRandomNumber(0, 10);

        const answer = firstNumber * secondNumber;

        questions.push({
          firstNumber,
          secondNumber,
          operation: "multiply",
          answer,
        });
      } else {
        const firstNumber = getRandomNumber(1, currentLevel.maxFirstNumber);

        const secondNumber = getRandomNumber(0, 10);

        const answer = firstNumber * secondNumber;

        questions.push({
          firstNumber: answer,
          secondNumber: firstNumber,
          operation: "divide",
          answer: secondNumber,
        });
      }
    }

    setCurrentQuestions(questions);
  }

  // Первая генерация вопросов
  useEffect(() => {
    generateQuestions();
  }, [levelId]);

  function handleAnswer(index: number, isCorrect: boolean): void {
    setAnswers((previousAnswers) => {
      const newAnswers = [...previousAnswers];

      newAnswers[index] = isCorrect;

      return newAnswers;
    });
  }

  // Проверяем, правильно ли решены все 4 примера
  useEffect(() => {
    const allCorrect = answers.every((answer) => answer === true);

    if (allCorrect) {
      setGameCompleted(true);
    }
  }, [answers]);

  // Начинаем новую игру после небольшой паузы
  useEffect(() => {
    if (!gameCompleted) {
      return;
    }

    const timer = setTimeout(() => {
      generateQuestions();

      setAnswers(Array(questionsPerPage).fill(null));

      setGameId((previousGameId) => previousGameId + 1);

      setGameCompleted(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameCompleted]);

  if (!currentLevel) {
    return <div>Level not found</div>;
  }

  return (
    <>
      <button id="button-go-back" onClick={() => navigate("/")}>
        X
      </button>

      <p>Game {currentLevel.id}</p>

      {currentQuestions.map((question, index) => (
        <QuestionCard
          key={`${gameId}-${index}`}
          question={question}
          onAnswer={(isCorrect) => handleAnswer(index, isCorrect)}
        />
      ))}
    </>
  );
}

export default Level;
