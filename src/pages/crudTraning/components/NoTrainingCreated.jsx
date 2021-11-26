import React from "react";
import { useSelector } from "react-redux";

const NoTrainingCreated = ({ setFormSent }) => {
  const { traningSent } = useSelector((state) => state.crudTrainingReducer);
  const handleNewTraning = (e) => {
    setFormSent(false);
  };

  return (
    <div className="screen-container text-center">
      <div>{JSON.stringify(traningSent)}</div>
      <button className="btn btn-primary" onClick={handleNewTraning}>
        Crear un nuevo training
      </button>
    </div>
  );
};

export default NoTrainingCreated;
