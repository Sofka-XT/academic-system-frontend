import { setAllCourses } from "../../thunkAction/coursesThunk";
import { useEffect } from "react";
import { connect } from "react-redux";
import './components/CourseComponent.css'
import { Pager } from "./components/Pager";

import RenderCourses from "./components/RenderCourses";


const CoursesListComponent = ({dispatch,courses,loading, hasError}) => {

    useEffect(() => {
        dispatch(setAllCourses())
        }
    , [dispatch])

    return (        
      <div>
        <h1>Courses</h1> 
        <Pager itemList={courses} loading={loading} hasErrors={hasError}/>     
      </div>
    )
  }

const mapStateToProps = state => ({
    loading: state.coursesReducer.loading,
    courses: state.coursesReducer.courses,
    hasError: state.coursesReducer.error,
})
export default connect(mapStateToProps)(CoursesListComponent)