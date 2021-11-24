import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase.config";

const fetchRole = async (response) => {
  
    const docRef = doc(db, "coach", response.user.uid);
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

    const data = {
      id : response.user.uid,
      name : response.user.displayName,
      photoUrl : response.user.photoURL,
      role: "APPRENTICE"
    }
    window.localStorage.setItem(
      'loggedUser', JSON.stringify(data)
    )
    return data
  }

  export default fetchRole;