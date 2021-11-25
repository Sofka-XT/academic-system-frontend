import React from "react";

const CSVTableComponent = ({ data }) => {
  

  if(data){

    return (
       <table>
          <thead>
            <tr>
              <th>Indice</th>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {data.map((apprentice, index)=>(
              <tr key={index}>
                <td>{index +1 }</td>
                <td>{apprentice.name}</td>
                <td>{apprentice.email}</td>
                <td>{apprentice.tel}</td>
              </tr>
            ))}
          </tbody>
      </table>
    );
  }else{
    return (<div>No hay estudiantes registrados para el training</div>)
  }
};

export default CSVTableComponent;
