import React, { useState } from "react";

export default function EditionProgramPage() {
  // Aquí toca traer la información del back para mostrar en el formulario y poder editar
  const [values, setValues] = useState({
    nameProgram: "",
    courses: [],
  });

  const handleChange = () => {
    setValues({
      nameProgram: "training C4",
      courses: [{}]
    });
  };

  console.log("Estoy en la pagina de edición");

  return (
    <div>
      <h1> Editar Programa </h1>
      <div>
        <label> Nombre del programa: </label>
        <input></input>
      </div>
      <div>
        <label>Curso</label>
        <select>
          {/* En el primer option coloco un estado para que se reemplace por el primer curso */}
          <option>FullStack</option>
        </select>
        <div>
          <label>Temas</label>
          <ul>
            <li> CategoryName</li>
            <input placeholder="Duración en días"></input>
          </ul>
        </div>
      </div>
    </div>
  );
}
