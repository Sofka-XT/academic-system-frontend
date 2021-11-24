import React from 'react'
import { deleteCourse } from '../../../thunkAction/coursesThunk'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import swal from 'sweetalert'
import { useAppDispatch } from '../../../state/store.hook';

export default function DeleteButtonComponent ({id}) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleDelete=()=>{
        swal({
            title: "Do you really want to delete this ?",
            text: "Confirm if you want to delete this course",
            icon: "warning",
            buttons: ["Cancel", "Confirm"]
          }).then((confirmed) => {
            if (confirmed) {
                dispatch(deleteCourse(id))
                .then(
              swal({
                text: "The course has been deleted successfully",
                icon: "success",
                buttons: ["Confirm"]
              })).then((confirmed) => {
                if (confirmed) {
                navigate("/dashboard/courseslist")}})
            }
          })
       /*  dispatch(deleteCourseById(id))
        .then(navigate("/dashboard/courseslist")) */
    }

    return (
        <button onClick={()=>{handleDelete()}}>
            Eliminar
        </button>
    )
}


