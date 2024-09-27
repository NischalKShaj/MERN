// <=============================== file to show the working of the use memo ===================>

// importing the required modules
import { useMemo, useState } from "react";

const UseMemo = () => {
  const [firstInput, setFirstInput] = useState<number | string>("");
  const [secondInput, setSecondInput] = useState<number | string>("");
  const [sum, setSum] = useState<number | null>(null);

  const calculateSum = (a: number, b: number) => {
    return a + b;
  };

  const expCalc = useMemo(() => {
    return calculateSum(Number(firstInput), Number(secondInput));
  }, [firstInput, secondInput]);

  const handleSum = () => {
    setSum(expCalc);
    setFirstInput("");
    setSecondInput("");
  };

  return (
    <div>
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
      <button onClick={handleSum}>calculate</button>
      {sum !== null && <p>{sum}</p>}
    </div>
  );
};

export default UseMemo;
