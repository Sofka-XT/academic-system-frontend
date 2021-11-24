import React, { useState } from "react";
import { connect } from "react-redux";
import { EditForm } from "./components/EditForm";

const EditionProgramPage = ({ program }) => {
  // Aquí toca traer la información del back para mostrar en el formulario y poder editar
  // const [values, setValues] = useState({
  //   nameProgram: "",
  //   courses: [],
  // });


  const renderEditPage = () => {

    
    const courses = program.courses;
    console.log("entra al map")
    console.log(program)

    return courses.map((course) => (
      <EditForm course={course} />
    ));
  };

  return (
    <div>
      <form>
        <h1> Editar Programa </h1>
        <div>
          <label> Nombre del programa: </label>
          <input value={program.name}></input>
          <div>{renderEditPage()}</div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  program: state.programReducer.program,
});

export default connect(mapStateToProps)(EditionProgramPage);
