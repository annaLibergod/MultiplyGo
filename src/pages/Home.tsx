import "../App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const startLevel = (levelId: string) => {
    navigate(`/level/${levelId}`);
  };
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
      id: "0-10",
      name: "0-10",
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
