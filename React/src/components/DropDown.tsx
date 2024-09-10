// <=============== file to change the state ====================>

import React, { useState } from "react";

const DropDown = () => {
  const fruits = ["apple", "banana", "orange"];
  const vegetables = ["carrot", "onion"];
  const [category, setCategory] = useState("");
  const [selectCat, setSelectCat] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setCategory(category);
    if (category === "fruit") {
      setSelectCat(fruits);
    } else if (category === "vegetables") {
      setSelectCat(vegetables);
    }
  };

  return (
    <div>
      <select onChange={handleChange} value={category}>
        <option value="">select category</option>
        <option value="fruit">fruits</option>
        <option value="vegetables">vegetables</option>
      </select>

      {category && (
        <div>
          <select>
            <option> selected category: {category}</option>
            {selectCat.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default DropDown;
