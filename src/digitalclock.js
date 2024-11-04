import React, { useState, useEffect } from 'react';
import './digitalclock.css'; // Import the CSS file

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="clock-container">
      <h1 className="clock-heading">Current Time</h1>
      <div className="clock">{formattedTime}</div>
    </div>
  );
};

export default DigitalClock;
