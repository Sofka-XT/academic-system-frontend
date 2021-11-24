import { updateProgramThunk } from "../../../thunkAction/programThunk";
import React, { useState } from "react";

export const CategoriesListProgram = ({ categories, category, program }) => {
  const [duration, setDuration] = useState(category.days);

  const handleDurationChange = (e, category) => {
    setDuration(e.target.value);
    category.days = e.target.value;
    console.log(program.courses)
    // categories.map((categor) => {
    //   // if (categor.categoryId === category.categoryId) {
    //     category.days = e.target.value;
    //   // }
    //   console.log(program.courses)
    // });
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
