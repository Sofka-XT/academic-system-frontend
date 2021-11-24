import { updateProgramThunk } from "../../../thunkAction/programThunk";
import React, { useState } from "react";

export const CategoriesListProgram = ({ dispatch,categories, category, program }) => {
  const [duration, setDuration] = useState(category.days);

  const handleDurationChange = (e, category) => {
    e.preventDefault();
    setDuration(e.target.value);
    category.days = e.target.value;
  };

  return (
    <div>
      <li>{category.categoryName}</li>
      <input
        value={duration}
        onChange={(e) => {
          handleDurationChange(e, category);
        }}
      ></input>
    </div>
  );
};
