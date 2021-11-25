import { connect } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import React from "react";
import { useEffect, useState } from "react";
import {
  updateNameProgram,
  updateTotalDays,
} from "../../state/Program/programAction";
import { updateProgramThunk } from "../../thunkAction/programThunk";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import { InputPrograms } from "./components/InputPrograms";
import "./EditionProgramPage.css";

const EditionProgramPage = ({
  dispatch,
  program,
  loading,
  hasErrors,
  totalDays,
}) => {
  const [days, setDays] = useState(program.totalDays);

  useEffect(() => {
    if (program.courses) {
      let sumDays = 0;
      program.courses.map((course) => {
        if (course.categories) {
          course.categories.map((category) => {
            sumDays += parseInt(category.days);
          });
        }
      });

      let data = {
        totalDays: sumDays,
      };

      dispatch(updateTotalDays(data));
    }
  }, [program]);

  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Show Program.</p>;

  const handleOnClick = (id) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: "¿Quiere editar este program?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Editalo!",
    }).then((itemToEdit) => {
      if (itemToEdit) {
        MySwal.fire({
          text: "El programa ha sido editado",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(updateProgramThunk(program));
      }
    });
  };

  const handleDeleteCourse = (programId, courseId) => {
    console.log("deleting..." + programId + " " + courseId);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    let data = {
      programId: program.programId,
      name: e.target.value,
    };
    dispatch(updateNameProgram(data));
  };

  const renderEditPage = () => {
    if (Object.keys(program).length !== 0) {
      const courses = program.courses;
      return (
        courses &&
        courses.map((course) => (
          <div key={course.courseId}>
            <h3>Cursos:</h3>
            <div className="course-container">
              <h4>{course.courseName}</h4>
              {courses.length !== 1 && (
                <DeleteButtonCourses
                  dispatch={dispatch}
                  programId={program.id}
                  courseId={course.courseId}
                />
              )}
            </div>
            <div className="topics-list">
              <h5 className="topics-label">Temas:</h5>
              <ul>
                {course.categories &&
                  course.categories.map((category) => (
                    <InputPrograms
                      key={category.categoryId}
                      categoryId={category.categoryId}
                      category={category}
                      courseId={course.courseId}
                      programId={program.id}
                      dispatch={dispatch}
                    />
                  ))}
              </ul>
            </div>
          </div>
        ))
      );
    }
  };

  return (
    <div>
      <form className="form-container">
        <h1> Editar Programa </h1>
        <div>
          <div className="program-name-container">
            <h2 className="program-name"> Nombre del programa: </h2>
            <input
              className="program-inputs-name"
              value={program.name}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
          <div className="totaldays-container">
            <label className="totaldays-name">Total del días:</label> <p className="totaldays-name-num"> {totalDays} </p>
          </div> 
        </div>
        <div>
          <div>{renderEditPage()}</div>
        </div>
        <button
          className="button-edit"
          onClick={() => handleOnClick(program.id)}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  programs: state.programReducer.programs,
  program: state.programReducer.program,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
  totalDays: state.programReducer.totalDays,
});

export default connect(mapStateToProps)(EditionProgramPage);
