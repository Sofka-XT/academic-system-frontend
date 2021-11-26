import './CourseComponent.css'
import { useNavigate, useLocation } from 'react-router';

export const CourseComponent = ({name, id}) =>{

    const navigate = useNavigate();
    console.log("USE LOCATION: " , useLocation())

    return(
    <button className="course"
    onClick={()=>{navigate(`coursedetail/${id}`)}} >{name}</button>
    )
}