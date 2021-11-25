import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../state/crudTraining/crudTrainingActions";

const ProgramCardComponent = ({ program, handleInputChange }) => {
  const dispatch = useDispatch();
  const { training } = useSelector((state) => state.crudTrainingReducer);

  const handleSelectProgram = () => {
    const e = {
      target: {
        name: "program",
        value: program.id,
      },
    };
    handleInputChange(e);
    dispatch({ type: actions.ADD_PROGRAM_SELECTED, payload: program.id });
  };

  return (
    <div className="training__program-main-container">
      <div className="portfolio__item" onClick={handleSelectProgram}>
        <picture>
          <source
            type="image/jpg"
            srcset={process.env.PUBLIC_URL + "assets/img/program-card-bg.jpg"}
          />
          <img className="portfolio__img" alt="portfolio item" />
        </picture>
        <div className="portfolio__description container">
          <h2 className="portfolio__description--title">
            {program.name}
            <hr />
          </h2>
          <h5 className="portfolio__description--subtitle">
            Duranción: 3 semanas
          </h5>
        </div>
        <div
          className="training__program-selected"
          style={{
            display: `${training.program === program.id ? "unset" : "none"}`,
          }}
        >
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
      <h4 className="training__card-name m-3">{program.name}</h4>
    </div>
  );
};

export default ProgramCardComponent;
