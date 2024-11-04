import React, { useRef } from 'react';
import './clickercounter1.css';

const ClickerCounter1 = () => {
  const countRef = useRef(0); // useRef to store the counter value
  const displayRef = useRef(null); // useRef to target the display element

  const handleIncrement = () => {
    countRef.current += 1; // increment the counter
    displayRef.current.innerText = countRef.current; // correctly refer to countRef
  };

  const handleDecrement = () => {
    countRef.current -= 1; // decrement the counter
    displayRef.current.innerText = countRef.current; // correctly refer to countRef
  };

  return (
    <div className="design">
      <h1 ref={displayRef}>0</h1>
      <button onClick={handleIncrement}>Increment</button><br></br>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ClickerCounter1;