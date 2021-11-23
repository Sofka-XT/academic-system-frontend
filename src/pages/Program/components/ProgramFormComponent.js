import React, { useState } from "react";

export default function ProgramFormComponent(props) {
console.log("Estoy en el componente")
console.log(props)

  const onSubmit = (event) => {
    alert('El programa fue editado');
    event.preventDefault();

  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nombre del programa"
          // value={props.nameProgram}
        ></input>
        {/* tomar la lista de cursos y publicarla en forma de checkbox con un map */}
        <label>Seleccione el curso del programa: </label>
        <button>Agregar curso</button>
        <button type="OnSubmit" > Enviar </button>
      </form>
    </div>
  );
}
