import React, { useState } from "react";
import { updateDaysCurrentProgram } from "../../../state/Program/programAction";

export const InputPrograms = ({ currentDays, category,categoryId,courseId,programId,dispatch,name }) => {

  const [duration, setDuration] = useState(category.days);

  console.log(currentDays)

  const handleDurationChange = (e) => {
    e.preventDefault();
    setDuration(e.target.value);
    let data = {
      programId : programId,
      categoryId : categoryId,
      courseId : courseId,
      days: e.target.value
    }
    dispatch(updateDaysCurrentProgram(data))
  };

  return (
    <div>
      <li className="categoriesList">{name}</li>
      <label>Duración del programa:</label>
      <input
        type="number"
        className="program-inputs-days"
        value={duration}
        onChange={(e) => {
          handleDurationChange(e, category);
        }}
      ></input>
    </div>
  );
};
