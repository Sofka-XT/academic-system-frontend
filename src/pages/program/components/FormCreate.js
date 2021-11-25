import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProgram } from '../../../state/Program/programAction';


const FormCreate = ({ id, course }) => {

    const dispatch = useDispatch();
    //Todos los cursos que estan en el estado
    const courses = useSelector(state => state.programReducer.programCreate);


    const handleDurationChange = (event, category) => {

        const updateCategory = { ...category, days: event.target.value };
        //Actualizar los días
        //Buscar el curso y actualizarlo



        //El curso tiene varias categorias
        const newCoursesPrograma = courses.map(courseitem => {


            const categoriasNuevas= courseitem.categories.filter(categoryCompare => categoryCompare.id != category.id)
            const prueba=   {id: course.id, name: course.name,categories:[...categoriasNuevas,updateCategory] }


        })

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