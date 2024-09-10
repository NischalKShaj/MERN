// <====================== file to show the fallback component for the error boundary =======>

import React from "react";
import { FallbackProps } from "react-error-boundary";

const FallbackComponent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div>
      <p>somethings wrong</p>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>try again </button>
    </div>
  );
};

export default FallbackComponent;
