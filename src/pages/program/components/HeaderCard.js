import React from 'react'



const HeaderCard= ({DeleteButtonCourses, course, courses, dispatch, program}) => {

    console.log(course);
    return (
        <div className="course-container">
          <h4 className="create-program-course-title">
            {course.courseName}
          </h4>
          {courses.length !== 1 && (
            <DeleteButtonCourses
              dispatch={dispatch}
              programId={program.id}
              courseId={course.courseId}
            />
          )}
        </div>
    )
}

export default HeaderCard;