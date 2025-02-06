import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid"
import "./App.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ margin: "10px 0", width: "100%", background: "#eee", borderRadius: "5px", overflow: "hidden" }}>
      <div
        style={{
          height: "20px",
          width: `${progress}%`,
          background: "#4caf50",
          transition: "width 2s linear"
        }}
      ></div>
    </div>
  );
};

const ProgressBarApp = () => {
  const [bars, setBars] = useState([]);

  const addProgressBar = () => {
    if (bars.length < 2) {
      setBars([...bars, uuid()]);
    }
  };

  return (
    <div>
      <button onClick={addProgressBar}>Add Progress Bar</button>
      <div>{bars.map((id) => <ProgressBar key={id} />)}</div>
    </div>
  );
};

export default ProgressBarApp;

