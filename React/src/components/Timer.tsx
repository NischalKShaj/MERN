// <===================== file to create a timer ===================>

import { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setCount(0);
    intervalRef.current = window.setInterval(
      () => setCount((prev) => prev + 1),
      1000
    );
  };

  return (
    <div>
      <>{count}</>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Timer;
