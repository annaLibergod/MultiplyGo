import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const startLevel = (levelId: string) => {
    navigate(`/level/${levelId}`);
  };
  const levels: Level[] = [
    {
      id: "0-3",
      name: "0-3",
      maxFirstNumber: 3,
      minNumber: 0,
    },
    {
      id: "0-4",
      name: "0-4",
      maxFirstNumber: 4,
      minNumber: 0,
    },
    {
      id: "0-5",
      name: "0-5",
      maxFirstNumber: 5,
      minNumber: 0,
    },
    {
      id: "2-6",
      name: "2-6",
      maxFirstNumber: 6,
      minNumber: 2,
    },
    {
      id: "3-7",
      name: "3-7",
      maxFirstNumber: 7,
      minNumber: 3,
    },
    {
      id: "3-8",
      name: "3-8",
      maxFirstNumber: 8,
      minNumber: 3,
    },
    {
      id: "7-9",
      name: "7-9",
      maxFirstNumber: 9,
      minNumber: 7,
    },
    {
      id: "3-10",
      name: "3-10",
      maxFirstNumber: 10,
      minNumber: 4,
    },
  ];
  return (
    <>
      <h1>Choose Difficulty:</h1>
      {levels.map((level) => (
        <button className="level-button" onClick={() => startLevel(level.id)}>
          {level.name}
        </button>
      ))}
    </>
  );
}
export default Home;
