import { setAllCourses } from "../../thunkAction/coursesThunk";
import { useEffect } from "react";
import { connect } from "react-redux";
import './components/CourseComponent.css'
import { useNavigate } from "react-router";


const CoursesListComponent = ({dispatch,courses}) => {

    useEffect(() => {
        dispatch(setAllCourses())
        }
    , [dispatch])

    const navigate = useNavigate();


    const goToDetail=(id)=>{
        navigate(`/dashboard/coursedetail/${id}`)
    }

    const renderItems = (items) => {
        return <div className="grid">
            {items.map(ele=><button onClick={()=>{goToDetail(ele.id)}} className="grid-item">{ele.name}</button>)}
        </div>
    }

    return (        
      <div>
        <h1>Courses</h1>
        {renderItems(courses)}
        
      </div>
    )
  }

const mapStateToProps = state => ({
    loading: state.coursesReducer.loading,
    courses: state.coursesReducer.courses,
    hasError: state.coursesReducer.error,
})
export default connect(mapStateToProps)(CoursesListComponent)