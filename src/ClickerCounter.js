import React,{useRef} from 'react';

const ClickerCounter =() =>{
    const countRef = useRef(0); // useref to store the conter value
    const displayRef = useRef(null); // useref to target the display  element

    const handleClick = () =>{
        countRef.current +=1; // increment the counter
        displayRef.current.innerText = countRef.current; //corrctly refer countRef
    };
    return(
        <div>
            <h1 ref= {displayRef}>0</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default ClickerCounter;