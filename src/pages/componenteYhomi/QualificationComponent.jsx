import { setAllCourses } from "../../thunkAction/coursesThunk";
import { useEffect } from "react";
import { connect } from "react-redux";
import AccordionCourse from "./AccordionCourse";

const QualificationComponent = ({ dispatch, courses, loading, hasError }) => {
  useEffect(() => {
    dispatch(setAllCourses());
  }, [dispatch]);

  return (
    <div>
      <h1 className="header">Estados de calificaciones</h1>
      {console.log(courses)}
      <AccordionCourse courses={courses} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.coursesReducer.loading,
  courses: state.coursesReducer.courses,
  hasError: state.coursesReducer.error,
});
export default connect(mapStateToProps)(QualificationComponent);
