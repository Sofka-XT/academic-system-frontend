import './CourseComponent.css'


export const CourseComponent = ({name, id}) =>{
    return(
    <div className="course">{id} - {name}</div>
    )
}