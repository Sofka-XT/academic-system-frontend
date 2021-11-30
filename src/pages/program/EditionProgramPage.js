import { connect } from "react-redux";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddCourseToCurrentProgram,

} from "../../state/Program/programAction";
import {
  getCoursesThunk,
} from "../../thunkAction/programThunk";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import { InputPrograms } from "./components/InputPrograms";
import "./EditionProgramPage.css";
import { useProgramEffectForActions, useProgramTotalDays, useProgramUpddateCurrentProgram } from "../../hooks/useProgram";
import { useForm } from "react-hook-form";
import { swalEditConfirmAlert, swalErrorAlert, swalWarningAlert } from "./alerts/alerts";

const EditionProgramPage = ({
  dispatch,
  program,
  programs,
  loading,
  hasErrors,
  totalDays,
  courses,
}) => {
  const [selectedCourse, setSelectedCourse] = useState({});
  const {register,handleSubmit} = useForm()

  const navigate = useNavigate();

  useProgramTotalDays(program,dispatch);
  
  useProgramUpddateCurrentProgram(dispatch);
  useProgramEffectForActions(getCoursesThunk(),dispatch);

  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Show Program.</p>;

  const handleSelect = (e) => {
    setSelectedCourse(courses[e.target.value]);
  };

  const handleAddCourse = () => {
    let data = {
      courseId: selectedCourse.id,
      courseName: selectedCourse.name,
      categories: selectedCourse.categories.map((category) => {
        return {
          categoryId: category.id,
          categoryName: category.name,
          days: 1,
        };
      }),
    };

    let isEqualValue = false;

    program.courses.forEach((course) => {
      if (course.courseId === selectedCourse.id) {
        isEqualValue = true;
      }
    });

    if (!isEqualValue) {
      dispatch(AddCourseToCurrentProgram(data));
      return;
    }

    swalErrorAlert("Ya existe este curso")
  };

  const onSubmit = (data) => {
    let program2 = JSON.parse(JSON.stringify(program))
    program2.name = data.programName

    if(program2.courses.length === 0){
      swalErrorAlert("Debe añadir al menos un curso");
      return;
    }

    let isEqualProgram = false;

    programs.forEach((p) => {
      if(p.name.toLowerCase() === program2.name.toLowerCase() && p.id !== program2.id){
        isEqualProgram = true;
      }
    })
  
    if (isEqualProgram) {
      swalWarningAlert(`Ya existe un programa llamado ${program2.name}`)
      return;
    }

    swalEditConfirmAlert("¿Quiere editar este programa?",program2,dispatch,navigate)
  }

  const renderEditPage = () => {
    if (Object.keys(program).length !== 0) {
      return (
        <div>
          <h3>Cursos:</h3>
          <div className="select-container">
            <h6>Agregar curso: </h6>
            <div>
              <select
                className="form-select"
                defaultValue={"DEFAULT"}
                onChange={(e) => handleSelect(e)}
              >
                <option disabled value={"DEFAULT"}>
                  Seleccione un curso
                </option>
                {courses.map((course, index) => {
                  return (
                    <option key={index} value={index}>
                      {course.name}
                    </option>
                  );
                })}
              </select>
              {Object.keys(selectedCourse).length !== 0 && (
                <button
                className="button-edit"
                  type="button"
                  onClick={() => {
                    handleAddCourse();
                  }}
                >
                  Añadir curso
                </button>
              )}
            </div>
          </div>
          {program.courses &&
            program.courses.map((course) => (
              <div key={course.courseId}>
                <div className="bd-callout bd-callout-warning">
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
                            currentDays={category.days}
                          />
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h1> Editar Programa </h1>
        <div>
          <div>
            <div className="program-name-container">
              <h2 className="program-name"> Nombre del programa: </h2>
              <input
                required
                minLength= "3"
                className="program-inputs-name"
                defaultValue = {program.name}
                {...register("programName",{minLength : 3, required : true})}
              />
            </div>
            <div className="totaldays-container">
              <label className="totaldays-name">Total del días:</label>{" "}
              <p className="totaldays-name-num"> {totalDays} </p>
            </div>
          </div>

          <div>
            <div>{renderEditPage()}</div>
          </div>
        </div>
        <button
          className="button-edit"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  programs: state.programReducer.programs,
  courses: state.programReducer.courses,
  program: state.programReducer.program,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
  totalDays: state.programReducer.totalDays,
});

export default connect(mapStateToProps)(EditionProgramPage);
