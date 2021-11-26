import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProgramCardComponent from "./ProgramCardComponent";

const ProgramsListComponent = ({ handleInputChange }) => {
  const { programs } = useSelector((state) => state.crudTrainingReducer);

  return (
    <div id="portfolio">
      <div className="container">
        <h2 className="section__title text-center m-5">
          Lista de programas disponibles
        </h2>
        <div className="portfolio__grid">
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
