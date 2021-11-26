import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProgramCardComponent from "./ProgramCardComponent";

const ProgramsListComponent = ({ handleInputChange }) => {
  const { programs } = useSelector((state) => state.crudTrainingReducer);

  return (
    <div id="training">
      <div className="container">
        <div className="section__title text-center m-5">
          <h2>Lista de estudiantes para el training</h2>
          <div className="section__decoration"></div>
        </div>
        <div className="training__grid">
          {programs.map((program) => (
            <ProgramCardComponent
              handleInputChange={handleInputChange}
              key={program.id}
              program={program}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsListComponent;
