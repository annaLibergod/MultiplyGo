import { useState } from "react";
import type { Question } from "../pages/Level";

type QuestionCardProps = {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
};

function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  function checkAnswer() {
    const isCorrect = Number(userAnswer) === question.answer;

    setIsCorrect(isCorrect);
    onAnswer(isCorrect);
  }

  return (
    <div className="question-card">
      <h2>
        {question.firstNumber} {question.operation === "multiply" ? "×" : ":"}{" "}
        {question.secondNumber} ={" "}
        <input
          className={`numberInput ${
            isCorrect === true
              ? "correct"
              : isCorrect === false
                ? "incorrect"
                : ""
          }`}
          type="number"
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && userAnswer !== "") {
              checkAnswer();
            }
          }}
        />
      </h2>
    </div>
  );
}

export default QuestionCard;
