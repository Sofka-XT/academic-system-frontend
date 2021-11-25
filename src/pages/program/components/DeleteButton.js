
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deleteProgramByIdThunk } from '../../../thunkAction/programThunk'

export const DeleteButton = ({  dispatch,idData }) => {
  const MySwal = withReactContent(Swal)



  const handleOpenModal = () => {
    MySwal.fire({
      title: 'Está seguro?',
      text: "No será capaz de devolver esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrelo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProgramByIdThunk(idData)).then(() => {
          MySwal.fire('Borrado!', 'El programa ha sido borrado.', 'exito')
        })
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