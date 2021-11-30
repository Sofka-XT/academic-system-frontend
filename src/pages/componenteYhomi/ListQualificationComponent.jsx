import React from 'react'
import AccordionCourse from "./AccordionCourse"

function ListQualificationComponent({courses}) {
    return (
        <div >
            {courses.map((id, name,categories)=>
                <AccordionCourse id = {id} name={name} categories={categories}/>
            )}
        </div>
    )
}

export default ListQualificationComponent
