import React, { useState, useEffect } from 'react'
import { getAllcourses, postProgram } from '../../../api/program/programApi';
import { createProgram } from '../../../state/Program/programAction';
import FormCreate from './FormCreate';
import { useDispatch, useSelector } from 'react-redux';



const FormCreateProgram = () => {


    const coursesTime = useSelector(state => state.programReducer.programCreate);

    const dispatch = useDispatch();

    const [courses, setCourses] = useState([]);
    const [courseSelected, setCoursesSelected] = useState([]);
    const [success, setSuccess] = useState(false)


    useEffect(() => {
        //1. UseEffec, traer los cursos para el select
        const allCourses = async () => {
            const response = await getAllcourses();
            const data = await response.json();
            console.log("DATA---DB")
            console.log(data)
            setCourses(data)
        }
        allCourses();
    }, [])

    const handleCourses = (event) => {
        //1. Validar que el curso ya no esté seleccionado --->Falta
        //2. Traer los cursos según el curso
        const courseInfo = courses.filter((item) => item.id == event.target.value);
        setCoursesSelected([...courseSelected, courseInfo[0]])
        dispatch(createProgram([...courseSelected, courseInfo[0]]));

    }

    const handleSubmit= async(event) => {

        event.preventDefault();

        console.log(target.name.value)

        console.log(coursesTime);

        //Enviar info al service

        const program = {

            name: target.name.value,
            courses:[coursesTime]
            
        }

        try {

            await postProgram(program);

            setSuccess(true)


            
        } catch (error) {

            console.log(error)
            
        }

    
    }


    return (

        <div>

            {success && <p>Programa creado exitosamente</p>}

            <form onSubmit={handleSubmit}>
                <label>Nombre del programa</label>
                <input className="form-control" name="name" required/>
                <label>Selecciones un curso</label>

                <select onChange={handleCourses}>
                    {courses.map(course => {
                        return (
                            <option value={course.id}>{course.name}</option>
                        )
                    })}
                </select>

                {
                    courseSelected.map(course => {
                        console.log("COURSE")
                        console.log(course)
                   

                        return (
                            <FormCreate id={course.id} course= {course} />
                        )
                    })
                }

                <button>Crear programa</button>
            </form>

        </div>
    )



}

export default FormCreateProgram;