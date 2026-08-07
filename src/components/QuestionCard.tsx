import type { Question } from "../pages/Level";

type QuestionCardProps = {
  question: Question;
};

function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="question-card">
      <h2>
        {question.firstNumber} {question.operation === "multiply" ? "×" : "÷"}{" "}
        {question.secondNumber} ={question.answer}
      </h2>

      <input type="number" />
    </div>
  );
}

export default QuestionCard;
