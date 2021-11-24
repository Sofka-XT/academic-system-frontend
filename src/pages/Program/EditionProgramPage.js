import React, { useState } from "react";
import { connect } from "react-redux";
import { EditForm } from "./components/EditForm";

const EditionProgramPage = ({ program }) => {


  const renderEditPage = () => {
    const courses = program.courses;
    console.log(program)

    return courses.map((course) => (
      <EditForm  key={course.id} course={course} program={program} />
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
