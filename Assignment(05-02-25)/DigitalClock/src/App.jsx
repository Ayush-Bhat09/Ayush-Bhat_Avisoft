/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeFormat = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: !is24HourFormat,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <>
    <div className="clock-container">
      <div className="time-display">
        {timeFormat(time)
          .split("")
          .map((char, index) => (
            <Segment key={index} value={char} />
          ))}
      </div>
      <button className="toggle-button" onClick={() => setIs24HourFormat(!is24HourFormat)}>
        Switch to {is24HourFormat ? "12-hour" : "24-hour"} format
      </button>
    </div>
    </>
  );
};

const Segment = ({ value }) => {
  return (
    <div className="digit">
      <span>{value}</span>
    </div>
  );
};

export default App;
