import React, { useState } from "react";
import { useProgramUpdateDaysCurrentProgram } from "../../../hooks/useProgram";
import { updateDaysCurrentProgram } from "../../../state/Program/programAction";

export const InputPrograms = ({
  category,
  categoryId,
  courseId,
  programId,
  dispatch,
  currentDays,
}) => {
  const [duration, setDuration] = useState(currentDays);

  useProgramUpdateDaysCurrentProgram(
    programId,
    categoryId,
    courseId,
    currentDays,
    dispatch
  );

  const handleDurationChange = (e) => {
    e.preventDefault();
    setDuration(e.target.value);
    let data = {
      programId: programId,
      categoryId: categoryId,
      courseId: courseId,
      days: e.target.value,
    };
    dispatch(updateDaysCurrentProgram(data));
  };

  return (
    <div>
      <li className="categoriesList">{category.categoryName}</li>
      <div className="duration-category">
        <label>Duracion de la categoria:</label>
        <input
          type="number"
          min="1"
          required
          className="program-inputs-days"
          value={duration}
          onChange={(e) => {
            handleDurationChange(e, category);
          }}
        ></input>
      </div>
    </div>
  );
};
