import React from "react";
import { useSelector } from "react-redux";
import ProgramCardComponent from "./ProgramCardComponent";

const ProgramsListComponent = ({ handleInputChange }) => {
  const { programs } = useSelector((state) => state.crudTrainingReducer);

  return (
    <div id="training">
      <div className="container">
        <div className="section__title text-center m-5">
          <h2>Lista completa de programas disponibles</h2>
          <div className="section__decoration"></div>
        </div>
        <div className="training__grid">
          {programs?.map((program) => (
            <ProgramCardComponent
              key={program.id}
              handleInputChange={handleInputChange}
              program={program}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsListComponent;
