import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  AddCourseToCurrentProgram,
} from "../../state/Program/programAction";
import {
  getCoursesThunk,
  getProgramsThunk,
  postProgramThunk,
} from "../../thunkAction/programThunk";
import { connect } from "react-redux";
import { InputPrograms } from "./components/InputPrograms";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import "./FormCreatePrograPageComponent.css"
import { useProgramEffectForActions, useProgramUpddateCurrentProgram } from "../../hooks/useProgram";
import { swalErrorAlert } from "./alerts/alerts";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const FormCreateProgramPageComponent = ({ dispatch, courses, program, programs }) => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  const {register,handleSubmit} = useForm()

  useProgramUpddateCurrentProgram(dispatch);
  useProgramEffectForActions(getCoursesThunk(),dispatch);
  useProgramEffectForActions(getProgramsThunk(),dispatch);
  

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

  const onSubmit = (data) => {
    let program2 = JSON.parse(JSON.stringify(program))
    program2.name = data.programName
    
    if(program2.courses.length === 0){
      swalErrorAlert("Debe añadir al menos un curso");
      return;
    }

    let isEqualProgram = false;

    programs.forEach((p) => {
      if(p.name === program2.name){
        isEqualProgram = true;
      }
    })
  
    if (isEqualProgram) {
      Swal.fire({ title: `Ya existe un programa llamado ${program2.name}`, icon: "warning" });
      return;
    }

    Swal.fire({
    title: "¿Quiere crear este programa?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Crealo!",
  }).then((itemToEdit) => {
    if (itemToEdit.isConfirmed) {
      Swal.fire({
        text: "El programa ha sido creado",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      dispatch(postProgramThunk(program2));
      navigate(`/dashboard/programs`);
    } else if (itemToEdit.dismiss === Swal.DismissReason.cancel) {
      Swal.fire("Cancelado", "No se creó el programa", "error");
    }
  });
  }

  return (
    <div clas="create-pogram">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h2>Crear Programa</h2>
        <div className="col-6">
          <label >Nombre del programa</label>
          <input
            required
            minLength= "3"
            className="form-control"
            {...register("programName",{minLength : 3, required : true})}

          />

          <br/>
          <label>Selecciones un curso</label>

          <select className="form-select" defaultValue={"DEFAULT"} {...register("course")} onChange={handleSelect}>
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
  programs: state.programReducer.programs,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
});

export default connect(mapStateToProps)(FormCreateProgramPageComponent);
