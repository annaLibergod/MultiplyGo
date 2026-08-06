import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Level from "./pages/Level";

import "./App.css";

function App() {
  return (
    <>
      <section className="spacer">
        <h4>MultiplyGo</h4>
      </section>
      <section id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/level/:levelId" element={<Level />} />
        </Routes>
      </section>

      <div className="ticks"></div>

      <section className="spacer">
        <p className="fine-print">© 2026 MultiplyGo </p>
        <p className="fine-print">Made with ❤️ for learning</p>
      </section>
    </>
  );
}

export default App;
