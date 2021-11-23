import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginGoogle, signOutFirebase } from '../api/auth/authRequest';

import { doc, getDoc } from "firebase/firestore";
import { db } from '../config/firebase/firebase.config';

export const loginWhitGoogle = createAsyncThunk(
  'auth/loginWhitGoogleStatus',
  async () => {
    const response = await loginGoogle();

  const docRef = doc(db, "coach", response.user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = {
      id : response.user.uid,
      tipo: docSnap.data().tipo
    }
    return data;
  }
  return {
    id : response.user.uid,
    tipo: "ESTUDIANTE"
  }
}
);

export const signOut = createAsyncThunk('auth/signOutStatus', async () => {
  return await signOutFirebase();
});


const getTipoDeUsuario = (uid) => {
  
}