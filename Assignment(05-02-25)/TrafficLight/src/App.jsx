import { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;

    if (light === "red") {
      timer = setTimeout(() => setLight("green"), 4000);
    } else if (light === "green") {
      timer = setTimeout(() => setLight("yellow"), 3000);
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("red"), 500);
    }
    
    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${light === "yellow" ? "active" : ""}`}
      ></div>
      <div className={`light green ${light === "green" ? "active" : ""}`}></div>
    </div>
  );
};

export default App;
