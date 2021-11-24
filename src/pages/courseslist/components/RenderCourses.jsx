import React from 'react'
import './CourseComponent.css'
import { useNavigate } from "react-router";
import { connect } from "react-redux";

function RenderCourses({items,loading,hasError}) {

    const navigate = useNavigate()

    const renderCourses=()=>{
        if (loading) return <p>Loading courses...</p>
        if (hasError) return <p>Unable to display courses.</p>
        return items.map(ele=><button onClick={()=>{
            navigate(`/dashboard/coursedetail/${ele.id}`)}} 
            className="grid-item">{ele.name}</button>)
    }

    return (
        <div className="grid">
            {renderCourses()}
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.coursesReducer.loading,
    hasError: state.coursesReducer.error,
})
export default connect(mapStateToProps)(RenderCourses)
