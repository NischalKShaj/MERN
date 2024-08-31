// <================= file to demonstrate the error boundary ===================>

// importing the required modules
import React from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorBoundaryComponent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert" style={{ color: "red" }}>
      <h3>Something went wrong</h3>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>tryAgain!</button>
    </div>
  );
};

export default ErrorBoundaryComponent;
