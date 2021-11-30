import Swal from "sweetalert2";
import { deleteCourseById } from "../../../state/Program/programAction";
import { deleteProgramByIdThunk, postProgramThunk, updateProgramThunk } from "../../../thunkAction/programThunk";



  export const swalErrorAlert = (title) => {
    Swal.fire({  
      title: title,   
      icon: "error",
    });  
  };

  export const swalWarningAlert = (title) => {
    Swal.fire({  
      title: title,   
      icon: "warning",
    });  
  };

  export const swalEditConfirmAlert = (title, program, dispatch,navigate) => {
    Swal.fire({
      title: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Editalo!",
    }).then((itemToEdit) => {
      if (itemToEdit.isConfirmed) {
        swalSuccessAlert("El programa ha sido editado")
        dispatch(updateProgramThunk(program));
        
        navigate(`/dashboard/programs`);
      } else if (itemToEdit.dismiss === Swal.DismissReason.cancel) {
        swalCanceledAlert()
      }
    });
  }

  export const swalCreateConfirmAlert = (title, program, dispatch,navigate) => {
    Swal.fire({
      title: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Crealo!",
    }).then((itemToEdit) => {
      if (itemToEdit.isConfirmed) {
        swalSuccessAlert("El programa ha sido creado")
        dispatch(postProgramThunk(program));
        
        navigate(`/dashboard/programs`);
      } else if (itemToEdit.dismiss === Swal.DismissReason.cancel) {
        swalCanceledAlert()
      }
    });
  }

  export const swalDeleteProgramConfirmAlert = (title, id, dispatch) => {
    Swal.fire({
      title: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
    }).then((itemToEdit) => {
      if (itemToEdit.isConfirmed) {
        swalSuccessAlert("El programa ha sido eliminado")
        dispatch(deleteProgramByIdThunk(id));
      } else if (itemToEdit.dismiss === Swal.DismissReason.cancel) {
        swalCanceledAlert()
      }
    });
  }

  export const swalDeleteCourseConfirmAlert = (programId,courseId,title, dispatch) => {
    let data = {
      programId: programId,
      courseId: courseId,
    };
    
    Swal.fire({
      title: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
    }).then((itemToEdit) => {
      if (itemToEdit.isConfirmed) {
        swalSuccessAlert("El programa ha sido eliminado")
        dispatch(deleteCourseById(data));
      } else if (itemToEdit.dismiss === Swal.DismissReason.cancel) {
        swalCanceledAlert()
      }
    });
  }

  export const swalSuccessAlert = (title) => {
    Swal.fire({
      text: title,
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
  }

  export const swalCanceledAlert = () => {
    Swal.fire(
      "Cancelado",
      "No se efectuaron cambios en el programa",
      "error"
    )
  }

 



