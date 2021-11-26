import React from 'react'
import './CourseComponent.css'
import { connect } from "react-redux";
import { CourseComponent } from './CourseComponent';

function RenderCourses({items,loading,hasError}) {

    const renderCourses=()=>{
        if (loading) return <p>Loading courses...</p>
        if (hasError) return <p>Unable to display courses.</p>
        if (items.length===0) return <p>There are no courses to display.</p>
        
        return items.map(ele=><CourseComponent 
            className="grid-item"
            key={ele.id}
            id={ele.id}
            name={ele.name}/>)
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
