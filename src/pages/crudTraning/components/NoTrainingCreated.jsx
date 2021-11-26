import React from "react";

const NoTrainingCreated = ({ setFormSent }) => {
  const handleNewTraning = (e) => {
    setFormSent(false);
  };

  return (
    <div className="screen-container text-center">
      <button className="btn btn-primary" onClick={handleNewTraning}>
        Crear un nuevo training
      </button>
    </div>
  );
};

export default NoTrainingCreated;
