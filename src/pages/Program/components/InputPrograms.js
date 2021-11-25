import React, { useEffect, useState } from "react";
import { updateCurrentProgram, updatePrograms } from "../../../state/Program/programAction";

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
