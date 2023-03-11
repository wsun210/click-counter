import React, { useState } from "react";

export default function ClickButton() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const resetCount = (event) => {
    setCount(0);
    event.stopPropagation();
  }

  return(
    <div 
      className="center" 
      onClick={clickHandler}
    >
      <button onClick={resetCount}>Reset Count</button>
      <p>
        {count}
      </p>
    </div>
  )
}

