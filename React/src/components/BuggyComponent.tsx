// ================= file that raise the bug

// importing the required modules
import React from "react";

const BuggyComponent = () => {
  const shouldThrowError = false;
  if (shouldThrowError) {
    throw new Error("Created new bug component");
  }
  return (
    <div>
      <h3>No bug here!</h3>
    </div>
  );
};

export default BuggyComponent;
