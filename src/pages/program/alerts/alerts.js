import Swal from "sweetalert2";



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

 



