const outerFunction = () => {
  let outer = "i am outer";
  const innerFunction = () => {
    console.log("outer", outer);
  };
  return innerFunction;
};

let res = outerFunction();
res();
