// <================ file to show the working of lazy loading ===========>

// importing the required modules
import { lazy, Suspense, useState } from "react";

const LazyLoadingComp = lazy(() => import("./LazyLoadingComp"));

const LazyWorking = () => {
  const [show, setShowComp] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComp((prev) => !prev)}>
        show the component
      </button>

      <Suspense fallback={<div>loading....</div>}>
        {show && <LazyLoadingComp />}
      </Suspense>
    </div>
  );
};

export default LazyWorking;
