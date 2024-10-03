import { lazy, Suspense, useState } from "react";

const LC = lazy(() => import("./LC"));

const LL = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <Suspense fallback={<div>loading..</div>}>{show && <LC />}</Suspense>
    </div>
  );
};

export default LL;
