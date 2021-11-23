import React, { useState } from "react";
import ProgramFormComponent from "./components/ProgramFormComponent";

export default function EditionProgramPage() {
  // Aquí toca traer la información del back para mostrar en el formulario y poder editar
  const [values, setValues] = useState({
    nameProgram: "",
    startDate: "", // depende de cómo se recibe el date
    duration: "",
    courses: [],
  });

  const handleChange = () => {
    setValues({
      nameProgram: "training C4",
      startDate: "05/11/2022",
      duration: "12",
      courses: ["met", "prod", "git"],
    });
  };

  console.log("Estoy en la pagina de edición");

  return (
    <div>
      hello
      {/* <ProgramFormComponent states={values} /> */}
      <ProgramFormComponent states={{values:values,handle:handleChange}} />
    </div>
  );
}
