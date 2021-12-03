import React from 'react'
import { deleteCourse } from '../../../thunkAction/coursesThunk'
import { useNavigate } from 'react-router'
import swal from 'sweetalert'
import { useAppDispatch } from '../../../state/store.hook';

export default function DeleteButtonComponent ({id}) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleDelete=()=>{
        swal({
            title: "¿Estás seguro que quieres eliminar este curso?",
            text: "Por favor confirme se desea hacerlo",
            icon: "warning",
            buttons: ["Cancelar", "Confirmar"]
          }).then((confirmed) => {
            if (confirmed) {
                dispatch(deleteCourse(id))
                .then(
              swal({
                text: "El curso se ha eliminado con éxito",
                icon: "success",
                buttons: ["Confirm"]
              })).then((confirmed) => {
                if (confirmed) {
                navigate("/dashboard/courseslist")}})
            }
          })
    }

    return (
        <div  className="fas fa-trash-alt icon-delete"
         onClick={()=>{handleDelete()}}/>
    )
}


