// <=================== file to show how the use effect work ===================>

import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // use effect for mounting and un-mounting the component
  useEffect(() => {
    setMessage("component mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  //   use effect for updating the mounted component
  useEffect(() => {
    console.log("component that renders on each chang in the count state");
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  //   note: if the dependency array is empty it refers that the component gets rendered on each change of every state

  return (
    <div>
      <p>{message}</p>
      <>{count}</>
      <button onClick={handleClick}>increase</button>
    </div>
  );
};

export default UseEffect;
