import './CourseComponent.css'
import { useNavigate } from 'react-router';

export const CourseComponent = ({name, id}) =>{

    const navigate = useNavigate();

    return(
    <button className="course"
    onClick={()=>{navigate(`/dashboard/coursedetail/${id}`)}} >{name}</button>
    )
}