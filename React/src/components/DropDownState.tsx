// <================================ file to implement the drop down with div ================>

// importing the required modules
import { useState } from "react";

const DropDownState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <div
        className="p-4 bg-blue-500 text-white cursor-pointer"
        onClick={toggle}
      >
        select the options
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
          <div className="p-4 hover:bg-gray-200 cursor-pointer">option 1</div>
          <div className="p-4 hover:bg-gray-200 cursor-pointer">option 2</div>
          <div className="p-4 hover:bg-gray-200 cursor-pointer">option 3</div>
          <div className="p-4 hover:bg-gray-200 cursor-pointer">option 4</div>
        </div>
      )}
    </div>
  );
};

export default DropDownState;
