import React, { useState } from "react";
import {
  getCoursesThunk,
  getProgramsThunk,
} from "../../thunkAction/programThunk";
import { connect } from "react-redux";
import { InputPrograms } from "./components/InputPrograms";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import "./FormCreatePrograPageComponent.css";
import {
  useProgramEffectForActions,
  useProgramUpddateCurrentProgram,
} from "../../hooks/useProgram";
import { swalErrorAlert } from "./alerts/alerts";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {
  triggerALertRepitedCourse,
  triggerALertRepitedProgram,
} from "./alerts/triggerAlerts";

const FormCreateProgramPageComponent = ({
  dispatch,
  courses,
  program,
  programs,
}) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useProgramUpddateCurrentProgram(dispatch);
  useProgramEffectForActions(getCoursesThunk(), dispatch);
  useProgramEffectForActions(getProgramsThunk(), dispatch);

  const handleSelect = (e) => {
    setSelectedCourse(courses[e.target.value]);
  };

  const handleAddCourse = () => {
    triggerALertRepitedCourse(program, dispatch, selectedCourse);
  };

  const onSubmit = (data) => {
    let program2 = JSON.parse(JSON.stringify(program));
    program2.name = data.programName;

    if (program2.courses.length === 0) {
      swalErrorAlert("Debe añadir al menos un curso");
      return;
    }

    triggerALertRepitedProgram(programs, program2, dispatch, navigate, false);
  };

  return (
    <div>
      <form className="program-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="create-program-container">
          <input
            required
            minLength="4"
            className="programs__input"
            placeholder="Nombre del programa ..."
            {...register("programName")}
          />
          <select
            className="create-program-select"
            defaultValue={"DEFAULT"}
            {...register("course")}
            onChange={handleSelect}
          >
            <option value="DEFAULT" disabled>
              Seleccione un curso
            </option>
            {courses.map((course, index) => {
              return (
                <option key={course.id} value={index}>
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
          <br />

          {program.courses &&
            program.courses.map((course) => (
              <div
                className="bd-callout bd-callout-warning"
                key={course.courseId}
              >
                <div className="course-container">
                  <h4 className="create-program-course-title">{course.courseName}</h4>

                  <div className="topics-list">
                    <h5 className="topics-label">Categorias:</h5>
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
                            name={category.categoryName}
                            currentDays={category.days}
                          ></InputPrograms>
                        ))}
                    </ul>
                    
                  </div>
                </div>
                {courses.length !== 1 && (
                  <DeleteButtonCourses
                    dispatch={dispatch}
                    programId={program.id}
                    courseId={course.courseId}
                  />
                )}
              </div>
            ))}
        </div>
        <button className="trainings__btn-submit" type="submit">
          Crear programa
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.programReducer.courses,
  program: state.programReducer.program,
  programs: state.programReducer.programs,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
});

export default connect(mapStateToProps)(FormCreateProgramPageComponent);
