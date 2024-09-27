// <============================= file to show the react.memo ============>

// importing the required modules
import React, { useMemo, useState } from "react";

interface Count {
  count: number;
}

const CountComponent: React.FC<Count> = React.memo(({ count }) => {
  return <div>Count:{count}</div>;
});

const ReactMemo = () => {
  const [count, setCount] = useState(0);
  const [firstInput, setFirstInput] = useState<number | string>("");
  const [secondInput, setSecondInput] = useState<number | string>("");
  const [sum, setSum] = useState<number | null>(null);

  const increment = () => {
    setCount(count + 1);
  };

  const calc = (a: number, b: number) => {
    return a + b;
  };

  const expCalc = useMemo(() => {
    return calc(Number(firstInput), Number(secondInput));
  }, [firstInput, secondInput]);

  const handleClick = () => {
    setSum(expCalc);
  };

  return (
    <div>
      <CountComponent count={count} />
      <button onClick={increment}>increment</button>
      <input
        type="number"
        value={firstInput}
        onChange={(e) => setFirstInput(Number(e.target.value))}
      />
      <input
        type="number"
        value={secondInput}
        onChange={(e) => setSecondInput(Number(e.target.value))}
      />
      <button onClick={handleClick}>calculate</button>
      {sum !== null && <p>sum is : {sum}</p>}
    </div>
  );
};

export default ReactMemo;
