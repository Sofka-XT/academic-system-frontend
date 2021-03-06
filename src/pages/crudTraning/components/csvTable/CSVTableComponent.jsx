import React from "react";
// import "./FormInputTrainingComponent.css";
import "./CSVTableComponent.css";
import "./../../../../common/styles/styles.css";

const CSVTableComponent = ({ data }) => {
  if (data) {
    return (
      <div className="training__table-container">
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
                <td>{apprentice.emailAddress}</td>
                <td>{apprentice.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="alert alert-primary text-center training__alert-primary mt-5 b-5">
        No hay estudiantes registrados para el training
      </div>
    );
  }
};

export default CSVTableComponent;
