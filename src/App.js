
import Board from "./Board";
import Info from "./Info";

// Importing the CSS File
import "./App.css";


import { useState } from "react";

function App() {

  const [reset, setReset] = useState(false);

  const [winner, setWinner] = useState("");

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="main">
      <div className="App">
        <h1 style={{ color: "white" }}>X-O Game 👊</h1>
        {/* Shrinks the popup when there is no winner */}
        <div className={`winner ${winner !== "" ? "" : "shrink"}`}>

          <div className="winner-text">{winner}</div>
   
          <button onClick={() => resetBoard()}>Reset Board</button>
        </div>
   
        <Board
          reset={reset}
          setReset={setReset}
          winner={winner}
          setWinner={setWinner}
        />
        <Info />
      </div>
    </div>
  );
}

export default App;
