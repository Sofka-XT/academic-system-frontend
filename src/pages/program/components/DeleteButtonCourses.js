
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deleteCourseById } from '../../../state/Program/programAction'
import "../ListOfProgramsPageComponent.css"

export const DeleteButtonCourses = ({  dispatch,programId,courseId }) => {
  const MySwal = withReactContent(Swal)



  const handleOpenModal = () => {
    MySwal.fire({
      title: 'Estas seguro?',
      text: "No será capaz de revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar!',
      cancelButtonText: 'No, cancelar!',

    }).then((result) => {
      if (result.isConfirmed) {
          let data = {
              programId: programId,
              courseId: courseId
          }

          dispatch(deleteCourseById(data))
        // console.log("deleting" + programId + " " + courseId).then(() => {
        //   MySwal.fire('Deleted!', 'Your file has been deleted.', 'success')
        // })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
      }
    })
  }
  return (
    <button
      type="button"
      className="button-delete"
      onClick={() => {
        handleOpenModal()
      }}
    >
      Delete
    </button>
  )
}