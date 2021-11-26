import React from "react";
import { useSelector } from "react-redux";
import CSVTableComponent from "./CSVTableComponent";

const TraningConfirmationCreationView = ({ setFormSent }) => {
  const { traningSent } = useSelector((state) => state.crudTrainingReducer);
  const handleNewTraning = (e) => {
    setFormSent(false);
  };

  return (
    <div
      className="screen-container container text-center"
      style={{ marginBottom: "50px" }}
    >
      <div className="">
        <div className="title-container lecontainer">
          <h2 className="my-3">Traning Creado Exitosamente</h2>
          <hr />
        </div>
        <h5 className="text-center mt-3">nombre: {traningSent.name}</h5>
        <h5 className="text-center my-3">
          Empieza en la fecha: {traningSent.startingDate}
        </h5>

        <h4 className="text-center mt-3">
          Lista de coaches asignados para el training
        </h4>
        <CSVTableComponent data={traningSent.coaches} />

        <h4 className="text-center mt-5">
          Lista de aprendices asignados para el training
        </h4>
        <CSVTableComponent data={traningSent.apprentices} />
      </div>
      <button
        id="traning__new-traning-btn"
        className="btn btn-primary btn-new-traning mt-5"
        onClick={handleNewTraning}
      >
        Crear un nuevo training
      </button>
      <div>&nbsp;</div>
    </div>
  );
};

export default TraningConfirmationCreationView;
