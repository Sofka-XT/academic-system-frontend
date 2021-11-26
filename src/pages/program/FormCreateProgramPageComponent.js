import React, { useState, useEffect } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {
  AddCourseToCurrentProgram,
  updateCurrentProgram,
  updateNameCurrentProgram,
} from "../../state/Program/programAction";
import {
  getCoursesThunk,
  postProgramThunk,
} from "../../thunkAction/programThunk";
import { connect } from "react-redux";
import { InputPrograms } from "./components/InputPrograms";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import { useNavigate } from "react-router-dom";
import "./FormCreatePrograPageComponent.css"

const FormCreateProgramPageComponent = ({ dispatch, courses, program }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    //1. UseEffec, traer los cursos para el select
    dispatch(getCoursesThunk());
    let data = {
      program: {
        name: "",
        courses: [],
      },
    };

    dispatch(updateCurrentProgram(data));
    if (courses[0] !== undefined) {
      setSelectedCourse(courses[0]);
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const handleInput = (e) => {
    e.preventDefault();
    let data = {
      name: e.target.value,
    };
    dispatch(updateNameCurrentProgram(data));
  };

  const handleSelect = (e) => {
    setSelectedCourse(courses[e.target.value]);
  };

  const handleAddCourse = () => {
    let data = {
      courseId: selectedCourse.id,
      courseName: selectedCourse.name,
      categories: selectedCourse.categories.map((category) => {
        return { categoryId: category.id, categoryName: category.name };
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

    Swal.fire({ title: "Ya existe este curso", icon: "error" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (program.name === "") {
      Swal.fire({
        title: "Debe poner el nombre del programa",
        icon: "error",
      });
      return;
    }

    if(program.name.length < 4){
      Swal.fire({
        title: "El nombre del programa debe ser mayor que 4 caracteres",
        icon: "error",
      });
      return;
    }

    if (program.courses.length === 0) {
      Swal.fire({ title: "Debe añadir al menos un curso", icon: "error" });
      return;
    }

    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Quiere crear este programa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Crealo!",
    }).then((itemToEdit) => {
      if (itemToEdit.isConfirmed) {
        MySwal.fire({
          text: "El programa ha sido creado",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        dispatch(postProgramThunk(program));
        navigate(`/dashboard/programs`);
      } else if (itemToEdit.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "No se creó el programa", "error");
      }
    });
  };

  return (
    <div clas="create-pogram">
      <form className="form-container">
        <h2>Crear Programa</h2>
        <div className="col-6">
          <label >Nombre del programa</label>
          <input
            onChange={(e) => {
              handleInput(e);
            }}
            className="form-control"
            name="name"
            required
          />
          <label>Selecciones un curso</label>

          <select className="form-select" defaultValue={"DEFAULT"} onChange={(e) => handleSelect(e)}>
            <option value="DEFAULT" disabled>
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
            <button className="button-edit"
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
              <div className="bd-callout bd-callout-warning" key={course.courseId}>
                <h6>{course.courseName}</h6>

                <div>
                  <label>Temas</label>

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
                          currentDays={1}
                        ></InputPrograms>
                      ))}
                  </ul>
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
        <button className="button-edit"
          onClick={(e) => { 
            handleSubmit(e);
          }}
          type="submit"
        >
          Crear programa
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.programReducer.courses,
  program: state.programReducer.program,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
});

export default connect(mapStateToProps)(FormCreateProgramPageComponent);
