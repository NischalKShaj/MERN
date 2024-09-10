// <================= file to pass data as props ======================>

import { useState } from "react";
import Prop from "./Prop";

const PropsPass = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
      <Prop count={count} />
    </div>
  );
};

export default PropsPass;
