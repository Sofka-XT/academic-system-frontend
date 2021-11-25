import React, { useState, useEffect } from 'react'
import { getAllcourses, postProgram } from '../../api/program/programApi';
import { AddCourseToCurrentProgram, createProgram, updateCurrentProgram, updateNameCurrentProgram } from '../../state/Program/programAction';
import FormCreate from './components/FormCreate';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesThunk, postProgramThunk } from '../../thunkAction/programThunk';
import { connect } from 'react-redux';
import { InputPrograms } from './components/InputPrograms';
import { DeleteButtonCourses } from './components/DeleteButtonCourses';



const FormCreateProgramPageComponent = ({dispatch,courses,loading, program}) => {

    const [selectedCourse, setSelectedCourse] = useState({})

    useEffect(() => {
        //1. UseEffec, traer los cursos para el select
        dispatch(getCoursesThunk())
        let data = {
            program: {
                name: "",
                courses: []
            }
          }
          dispatch(updateCurrentProgram(data))
    }, [])

    useEffect(() => {
        if(courses[0] !== undefined){
            setSelectedCourse(courses[0])
        }
    }, [])

    const handleInput = (e) => {
        e.preventDefault();
        let data = {
          name: e.target.value
        }
        dispatch(updateNameCurrentProgram(data))
    }

    const handleSelect = (e) => {
        setSelectedCourse(courses[e.target.value])
    }

    const handleAddCourse = () => {
        let data = {
             courseId: selectedCourse.id, courseName : selectedCourse.name, 
                categories : selectedCourse.categories.map((category) => {
                    return(
                        {   categoryId : category.id,
                            categoryName: category.name,
                        }
                    )
                })
        }
        
        dispatch(AddCourseToCurrentProgram(data))
        
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(postProgramThunk(program))
    }

    return (

        <div>

            <form>
                <label>Nombre del programa</label>
                <input onChange={(e) => {handleInput(e)}} className="form-control" name="name" required/>
                <label>Selecciones un curso</label>

                <select onChange={(e) => handleSelect(e)}>
                    <option disabled selected>Seleccione un curso</option>
                    {courses.map((course,index) => {
                        return (
                            <option key={index} value={index}>{course.name}</option>
                        )
                    })}
                </select>

                {Object.keys(selectedCourse).length !== 0 && (
                    <button type="button" onClick={() => {handleAddCourse()}}>Añadir curso</button>
                 )}
                <br/>


                    {
                        program.courses && program.courses.map((course) => (
                            <div key={course.courseId}>
                            <h3>{course.courseName}</h3>

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
                                        dispatch={dispatch}
                                        name={category.categoryName}/>
                                    ))
                                }
                                </ul>
                            </div>
                            {courses.length !== 1 && (
                                <DeleteButtonCourses dispatch={dispatch} programId={program.id} courseId={course.courseId}/>
                            )}
                            </div>
                        ))
                    }
      

                <button onClick={(e) => {handleSubmit(e)}} type="submit">Crear programa</button>
            </form>

        </div>
    )



}

const mapStateToProps = (state) => ({
    courses: state.programReducer.courses,
    program: state.programReducer.program,
    loading: state.programReducer.loading,
    hasErrors: state.programReducer.hasErrors,
    redirect: state.programReducer.redirect,
  });
  
  export default connect(mapStateToProps)(FormCreateProgramPageComponent);