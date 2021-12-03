import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './components/CourseDetailComponent.css';
import DeleteButtonComponent from './components/DeleteButtonComponent';
import EditButtonComponent from './components/EditButtonComponent';
import { setAllCourses } from "../../thunkAction/coursesThunk";


const CourseDetail = ({dispatch,courses,loading, hasError, user}) => {

 useEffect(() => {
        dispatch(setAllCourses())
        }
    , [dispatch])

const params = useParams();
let course = courses.filter((item) => item.id === params.courseid)[0];
    console.log(courses)
    console.log(course)

const renderCourseDetail=()=>{
        if (loading) return <p>Loading information...</p>
        if (hasError) return <p>Unable to display information.</p>
        if (courses.length===0) return <p>There is no information to display.</p>
        
        return (
    <div className="contenedor">
      <header className="header">
        <h2>{course.name}</h2>
      </header>

      <div className="contenido">
        <p>Id del curso: {course.id}</p>
        <h5>Descripción:</h5>
        <p className="section_decoration body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet ex ipsum. 
        Ut auctor luctus ipsum, ut ullamcorper nunc finibus sed. Quisque non convallis nibh. In 
        interdum ligula ac sapien semper blandit. Nulla nunc purus, ultricies quis elit et, accumsan 
        dignissim augue. In eros dui, sagittis vel lobortis eu, volutpat sit amet sem. Pellentesque 
        efficitur magna id ipsum cursus, sit amet tempor sem sollicitudin. Pellentesque suscipit 
        facilisis eros fringilla faucibus. Morbi eget ullamcorper enim. Curabitur at ex et orci 
        accumsan volutpat. Ut lobortis mattis diam at vestibulum. Aliquam sit amet ex a sem egestas 
        mollis. Vivamus non ipsum dictum, ornare purus in, suscipit sem. Curabitur id vestibulum leo. 
        Aliquam volutpat, orci eget iaculis feugiat, dui urna mattis diam, in accumsan felis velit ut 
        libero. Aenean lobortis vehicula placerat.</p>
        {user.role!=="APPRENTICE"&&<>
        <DeleteButtonComponent id={course.id} />
        <EditButtonComponent id={course.id} /></>}
      </div>

      <div>
        {course.categories?.map((categorie, index) => {
          return (
            <div className="categorie" key={course.id + 'categorie#' + index}>
              <h4>Categoria: {categorie.name}</h4>
              <a href={categorie.urlsRefGradles}>Enlace consulta: {categorie.urlsRefGradles}</a>
              <h5>Reglas</h5>
              {categorie.rules?.map((rule, index) => {
                return (
                  <div className="sidebar" key={course.id + 'rule#' + index}>
                    <div>Tipo: {rule.type}<br/>
                    Condicion: {rule.condition}{rule.average}<br/>
                    Feedback: {rule.feedback.name}<br/>
                    <a
                      href={rule.feedback.uri}
                      rel="noreferrer"
                      target="_blank"
                    >Enlace recurso</a>
                    </div>                    
                    
                  </div>
                );
              })}
            </div>
          );
        })}
        <br></br>
      </div>
    </div>
  )
    }


    return (             
      <>{renderCourseDetail()}</>
  )
}

const mapStateToProps = (state) => ({
  loading: state.coursesReducer.loading,
  hasError: state.coursesReducer.error,
  courses: state.coursesReducer.courses,
  user: state.authReducer.user
});
export default connect(mapStateToProps)(CourseDetail);








