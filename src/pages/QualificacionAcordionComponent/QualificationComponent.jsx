import { setAllCourses } from "../../thunkAction/coursesThunk";
import { useEffect } from "react";
import { connect } from "react-redux";
import AccordionCourse from "./AccordionCourse";
import "./QualificacionComponent.css"

const QualificationComponent = ({ dispatch, courses, loading, hasError }) => {
  useEffect(() => {
    dispatch(setAllCourses());
  }, [dispatch]);

  return (
    <div>
      <h1 className='TitleQualification'>Estados de calificaciones</h1>
      {console.log(courses)}
      <div>
      <AccordionCourse courses={courses} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.coursesReducer.loading,
  courses: state.coursesReducer.courses,
  hasError: state.coursesReducer.error,
});
export default connect(mapStateToProps)(QualificationComponent);
