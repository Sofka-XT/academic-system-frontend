import React from 'react'
import { useParams } from 'react-router-dom'


export const CourseDetail = () => {
    const params = useParams()
    return (
        <div>
            {params.courseid}
            HELLO WORLD
        </div>
    )
}
