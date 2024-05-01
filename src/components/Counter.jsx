import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  // use state hook

  function changeNum(int) {
    if (typeof int !== "number" || num + int < 0) return;
    setNum(num + int);
  }

  return (
    <div>
      <div>
        <button onClick={() => {changeNum(-1)}}>-</button>
        <div>{num}</div>
        <button onClick={() => {changeNum(1)}}>+</button>
      </div>
    </div>
  );
}