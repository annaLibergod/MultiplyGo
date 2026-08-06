import "../App.css";
import { useNavigate } from "react-router-dom";

const levels = [
  {
    id: "0-3",
    name: "0-3",
  },
  {
    id: "0-4",
    name: "0-4",
  },
  {
    id: "0-5",
    name: "0-5",
  },
  {
    id: "0-6",
    name: "0-6",
  },
  {
    id: "0-7",
    name: "0-7",
  },
  {
    id: "0-8",
    name: "0-8",
  },
  {
    id: "0-9",
    name: "0-9",
  },
  {
    id: "0-10",
    name: "0-10",
  },
];

function Level() {
  const navigate = useNavigate();

  return (
    <>
      <button id="button-go-back" onClick={() => navigate("/")}>
        X
      </button>
      <p>Game</p>
    </>
  );
}

export default Level;
