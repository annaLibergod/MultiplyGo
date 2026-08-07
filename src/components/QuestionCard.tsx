import type { Question } from "../pages/Level";

type QuestionCardProps = {
  question: Question;
};

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="question-card">
      <h2>
        {question.firstNumber} {question.operation === "multiply" ? "×" : "÷"}{" "}
        {question.secondNumber} ={" "}
        <input className="numberInput" type="number" />
      </h2>
    </div>
  );
}

export default QuestionCard;
