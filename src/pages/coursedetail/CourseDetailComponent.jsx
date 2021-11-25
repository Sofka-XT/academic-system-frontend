import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import './components/CourseDetailComponent.css'
import DeleteButtonComponent from './components/DeleteButtonComponent'
import EditButtonComponent from './components/EditButtonComponent'


const CourseDetail = ({courses}) => {
    const params = useParams()

    

    let course = courses.filter((item)=>item.id===params.courseid)[0]

    return (
        <div className="contenedor">
		<header className="header">
			<h2>{course.name}</h2>
		</header>

        <div className="contenido">
			<p>{course.id}</p>
            <DeleteButtonComponent id={course.id} />
            <EditButtonComponent id={course.id} />
            </div>
		
			<p>{course.categories?.map((categorie)=>{
				return <div className="">
                    <h3>Categoria: {categorie.name}</h3>
                    <h4>Rules:</h4>
                    {categorie.rules?.map((rule)=>{
                        return <div className="sidebar">
                            <p>Tipo: {rule.type}</p>
                            <p>Condicion: {rule.condition}{rule.average}</p>
                            <p>Feedback: {rule.feedback.name}</p>
                            <a href={rule.feedback.uri}>Enlace recurso</a> 
                            </div>
                    })}
                    </div>

            })}
				<br></br>
</p>
		
		
		
	
	</div>
    )
}

const mapStateToProps = state => ({
    loading: state.coursesReducer.loading,
    hasError: state.coursesReducer.error,
    courses: state.coursesReducer.courses,
})
export default connect(mapStateToProps)(CourseDetail)
