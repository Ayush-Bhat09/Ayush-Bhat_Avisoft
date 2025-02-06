import { useState } from "react";
import "./App.css" 

const App = () => {
  const [numDice, setNumDice] = useState(1);
  const [results, setResults] = useState([]);
  const rollDice = () => {
  const newResults = Array.from(
  { length: numDice },
  () => Math.floor(Math.random() * 6) + 1
  );
  setResults(newResults);
  };
 
  return (
    <>
      <h2>Dice Roller</h2>
        <p>Enter how many dices you want: </p>
      <div className="dice-roller">
        <input
          type="number"
          min="1"
          max="12"
          value={numDice}
          onChange={(e) =>
            setNumDice(Math.max(1, Math.min(12, Number(e.target.value))))
          }
        />
        <button onClick={rollDice}>Roll</button>
        <div className="dice-container">
          {results.map((result, index) => (
            <div key={index} className="dice">
              {result}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
