import React from "react";
import "./FormInputTrainingComponent.css";

const CSVTableComponent = ({ data }) => {
  if (data) {
    return (
      <div className="container training__table-container">
        <h2 className="section__title text-center m-5">
          Lista de estudiantes para el training
        </h2>
        <table
          className="table training__table-apprentices"
          style={{
            width: "60%",
            margin: "auto 20%",
            minWidth: "600px",
          }}
        >
          <thead>
            <tr className="bg-primary">
              <th scope="col">Indice</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo Electrónico</th>
              <th scope="col">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {data.map((apprentice, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{apprentice.name}</td>
                <td>{apprentice.email}</td>
                <td>{apprentice.tel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="alert alert-primary text-center training__alert-primary mt-5 b-5">
        No hay estudiantes registrados para el trainingss
      </div>
    );
  }
};

export default CSVTableComponent;
