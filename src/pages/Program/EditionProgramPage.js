import React from 'react'
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateNameProgram, updateTotalDays } from "../../state/Program/programAction";
import { updateProgramThunk } from "../../thunkAction/programThunk";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import { InputPrograms } from "./components/InputPrograms";


const EditionProgramPage = ({dispatch, program, loading, hasErrors, totalDays }) => {

  const [days, setDays] = useState(program.totalDays)


  useEffect(() => {
    if(program){
      let sumDays = 0;
      program.courses.map(course => {
        course.categories.map(category => {
          sumDays += parseInt(category.days);
        })
      })
  
      let data = {
        totalDays : sumDays,
      }
  
      dispatch(updateTotalDays(data))
    }
  }, [program])

  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Program Courses.</p>;

  const handleOnClick = (id) => {
    dispatch(updateProgramThunk(program))
  };

  const handleInputChange = (e) => {
    e.preventDefault()
    let data = {
      programId : program.programId,
      name : e.target.value
    }
    dispatch(updateNameProgram(data))
  }


  const renderEditPage = () => {
    if(Object.keys(program).length !== 0 ){
      const courses = program.courses;
      return(courses && courses.map((course) => (
        <div key={course.courseId}>
          <input value={program.name} onChange={(e) => {handleInputChange(e)}}/>
          <h3>{course.courseName}</h3>

          <DeleteButtonCourses dispatch={dispatch} programId={program.id} courseId={course.courseId}/>
          <div>
            <label>Temas</label>
            
            <ul>
              {course.categories && 
                course.categories.map((category) => (
                    <InputPrograms 
                    key={category.categoryId} 
                    categoryId={category.categoryId} 
                    category={category} courseId={course.courseId} 
                    programId={program.id} 
                    dispatch={dispatch}/>
                ))
              }
            </ul>
          </div>
        </div>
      )));
    }
  };

  return (
    <div>
      <form>
        <h1> Editar Programa </h1>
        <p> { totalDays } </p>
        <div>
          <label> Nombre del programa: </label>
          <label value={program.name}></label>
          <div>{renderEditPage()}</div>
        </div>
          <button onClick={() => handleOnClick(program.id)}>
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
  totalDays: state.programReducer.totalDays
});

export default connect(mapStateToProps)(EditionProgramPage);
