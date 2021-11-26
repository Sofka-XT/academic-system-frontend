import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase.config";
import { SweetAlert2 } from "sweetalert2-react-content";
import Swal from "sweetalert2";

const fetchRole = async (response) => {
  
    const docRef = doc(db, "user", response.user.email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = {
        id : response.user.uid,
        name : response.user.displayName,
        photoUrl : response.user.photoURL,
        role: docSnap.data().tipo
      }
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(data)
      )
      
      return data;
    }
    Swal.fire(
      'Error de autenticación',
      'Usuario no encontrado',
      'error'
    )
    return null
  }

  export default fetchRole;