import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProgram } from '../../../state/Program/programAction';


const FormCreate = ({ id, course }) => {

    const dispatch = useDispatch();
    //Todos los cursos que estan en el estado
    const courses = useSelector(state => state.programReducer.programCreate);


    const handleDurationChange = (event, category) => {

        const updateCategory = { categoryId:category.id, categoryName:category.name, days: event.target.value };

        console.log("CURSOSSS")

        //Recorrer el arreglo del estado para actualizar esa categoria
        const newCoursesPrograma = courses.map(courseitem => {


            const info = courseitem.categories.map(cat => {
                console.log("CARTTT")
                console.log(cat)

                let categoriageneral = cat;

                if (cat.id == category.id) {
                    categoriageneral =  updateCategory 
                }

                return categoriageneral;


            })

            return { courseId: course.id, courseName: course.name, categories: info }

        })

        console.log(newCoursesPrograma);

        console.log("---");

        dispatch(createProgram(newCoursesPrograma))





    }

    return (
        <div>
            <h3>Nombre del curso: {course.name}</h3>
            <h4>Categorias</h4>
            {course.categories.map(category => {

                return (
                    <>
                        <p>Nombre de la categoria : {category.name}</p>
                        duracion: <input type="number" onChange={(e) => {
                            handleDurationChange(e, category);
                        }}></input>
                    </>
                )



            })}
        </div>
    )


}


export default FormCreate;