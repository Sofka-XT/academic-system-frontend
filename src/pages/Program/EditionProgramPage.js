import { connect } from "react-redux";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddCourseToCurrentProgram,
  updateCurrentProgram,
  updateNameProgram,
  updateTotalDays,
} from "../../state/Program/programAction";
import {
  getCoursesThunk,
  updateProgramThunk,
} from "../../thunkAction/programThunk";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import { InputPrograms } from "./components/InputPrograms";
import "./EditionProgramPage.css";

const EditionProgramPage = ({
  dispatch,
  program,
  loading,
  hasErrors,
  totalDays,
  courses,
}) => {
  const [selectedCourse, setSelectedCourse] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (program.courses) {
      let sumDays = 0;
      program.courses.map((course) => {
        if (course.categories) {
          course.categories.map((category) => {
            sumDays += parseInt(category.days);
            return null;
          });
        }
        return null;
      });

      let data = {
        totalDays: sumDays,
      };

      dispatch(updateTotalDays(data));
    }
  }, [program,dispatch]);

  useEffect(() => {
    //1. UseEffec, traer los cursos para el select
    dispatch(getCoursesThunk());
    let data = {
        program: {
            name: "",
            courses: []
        }
      }
      dispatch(updateCurrentProgram(data))
}, [dispatch])
  
  useEffect(() => {
    if (courses[0] !== undefined) {
      setSelectedCourse(courses[0]);
    }
  }, [dispatch,courses])

  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Show Program.</p>;

  const handleOnClick = (event) => {
    event.preventDefault();
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Quiere editar este programa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Editalo!",
    }).then((itemToEdit) => {
      if (itemToEdit.isConfirmed) {
        MySwal.fire({
          text: "El programa ha sido editado",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        dispatch(updateProgramThunk(program));
        navigate(`/dashboard/programs`);
      } else if (itemToEdit.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          "Cancelado",
          "No se efectuaron cambios en el programa",
          "error"
        );
      }
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    let data = {
      programId: program.programId,
      name: e.target.value,
    };
    dispatch(updateNameProgram(data));
  };

  const handleSelect = (e) => {
    setSelectedCourse(courses[e.target.value]);
  };

  const handleAddCourse = () => {
    let data = {
      courseId: selectedCourse.id,
      courseName: selectedCourse.name,
      categories: selectedCourse.categories.map((category) => {
        return { categoryId: category.id, categoryName: category.name, days: 1};
      }),
    };

    let isEqualValue = false;

    program.courses.forEach(course => {
        if (course.courseId === selectedCourse.id) {
            isEqualValue = true;
        }
    });

    if(!isEqualValue){
        dispatch(AddCourseToCurrentProgram(data));
        return
    }

    Swal.fire({title: "Ya existe este curso", icon:"error"})
    
  };

  const renderEditPage = () => {
    if (Object.keys(program).length !== 0) {
      const courses = program.courses;
      return (
        <div>
          <h3>Cursos:</h3>
          {courses &&
            courses.map((course) => (
              <div key={course.courseId}>
                <div className="course-card">
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
      <form className="form-container">
        <h1> Editar Programa </h1>
        <div>
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
              <label className="totaldays-name">Total del días:</label>{" "}
              <p className="totaldays-name-num"> {totalDays} </p>
            </div>
          </div>

          <div>
            <div>{renderEditPage()}</div>
          </div>
          <div className="select-container">
            <h3>Agregar curso: </h3>
            <div>
              <select
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
        </div>
        <button
          className="button-edit"
          onClick={(event) => handleOnClick(event)}
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
