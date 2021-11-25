import React, { useState } from "react";
import { updateCurrentProgram } from "../../../state/Program/programAction";

export const InputPrograms = ({ category,categoryId,courseId,programId,dispatch }) => {

  const [duration, setDuration] = useState(category.days);

  const handleDurationChange = (e) => {
    e.preventDefault();
    setDuration(e.target.value);
    let data = {
      programId : programId,
      categoryId : categoryId,
      courseId : courseId,
      days: e.target.value
    }
    dispatch(updateCurrentProgram(data))
  };

  return (
    <div>
      <li className="categoriesList">{category.categoryName}</li>
      <input
        className="program-inputs"
        value={duration}
        onChange={(e) => {
          handleDurationChange(e, category);
        }}
      ></input>
    </div>
  );
};
