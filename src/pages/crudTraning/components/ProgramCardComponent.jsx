import React from "react";

const ProgramCardComponent = ({ program }) => {
  return (
    <div className="portfolio__item">
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
        <h5 className="portfolio__description--subtitle">3 semanas</h5>
      </div>
      <div
        className="training__program-selected"
        style={{ display: `${program.selected ? "unset" : "none"}` }}
      >
        <i class="fas fa-check-circle"></i>
      </div>
    </div>
  );
};

export default ProgramCardComponent;
