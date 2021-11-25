import React, { useState } from "react";
import ProgramCardComponent from "./ProgramCardComponent";

const ProgramsListComponent = ({ programs }) => {
  return (
    <div id="portfolio">
      <div className="container">
        <h2 className="section__title text-center m-5">
          Lista de programas disponibles
        </h2>
        <div className="portfolio__grid">
          {programs.map((program) => (
            <ProgramCardComponent program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsListComponent;
