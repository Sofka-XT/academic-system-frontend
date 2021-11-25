import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './components/CourseDetailComponent.css';
import DeleteButtonComponent from './components/DeleteButtonComponent';
import EditButtonComponent from './components/EditButtonComponent';

const CourseDetail = ({ courses }) => {
  const params = useParams();

  let course = courses.filter((item) => item.id === params.courseid)[0];

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

      <div>
        {course.categories?.map((categorie, index) => {
          return (
            <div className="categorie" key={course.id + 'categorie#' + index}>
              <h3>Categoria: {categorie.name}</h3>
              <h4>Reglas</h4>
              {categorie.rules?.map((rule, index) => {
                return (
                  <div className="sidebar" key={course.id + 'rule#' + index}>
                    <p>Tipo: {rule.type}</p>
                    <p>
                      Condicion: {rule.condition}
                      {rule.average}
                    </p>
                    <p>Feedback: {rule.feedback.name}</p>
                    <a
                      href={rule.feedback.uri}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Enlace recurso
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
        <br></br>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.coursesReducer.loading,
  hasError: state.coursesReducer.error,
  courses: state.coursesReducer.courses,
});
export default connect(mapStateToProps)(CourseDetail);
