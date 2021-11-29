// import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


  

  export const checkIfProgramNameIsEmpty = (Swal,program) => {
    const MySwal = withReactContent(Swal);
    if (program.name === "") {
      alert("entro a nuestra alerta")
      Swal.fire({
        title: "Debe poner el nombre del programa",
        icon: "error",
      });
      return;
    }
  };

 



