import { putProgramByIdApi } from "../../../api/program/programApi";
import React, { useState } from "react";

export const CategoriesListProgram = ({ categories, category, program }) => {
  const [duration, setDuration] = useState(category.days);

  const handleDurationChange = (e, category) => {
    setDuration(e.target.value);
    categories.map((categor) => {
      if (categor.categoryId === category.categoryId) {
        category.days = e.target.value;
        putProgramByIdApi(program);
      }
      console.log(program.courses)
    });
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
