// <===================== file to accept the passed props ================>

import React from "react";

interface PassedProp {
  count: number;
}

const Prop: React.FC<PassedProp> = ({ count }) => {
  return (
    <div>
      <div>{count}</div>
    </div>
  );
};

export default Prop;
