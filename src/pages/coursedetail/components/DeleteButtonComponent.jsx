import React from 'react'
import { deleteCourseById } from '../../../api/courses/coursesAPI'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import swal from 'sweetalert'

const DeleteButtonComponent = (id) =>{

    const navigate = useNavigate();

    const handleDelete=()=>{
        swal({
            title: "Do you really want to delete this ?",
            text: "Confirm if you want to delete this course",
            icon: "warning",
            buttons: ["Cancel", "Confirm"]
          }).then((confirmed) => {
            if (confirmed) {
                console.log(id)
                navigate("/dashboard/courseslist")
              swal({
                text: "The course has been deleted successfully",
                icon: "success"
              })
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
const mapStateToProps = state => ({
})
export default connect(mapStateToProps)(DeleteButtonComponent)

