import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase/firebase.config';

const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const signOutFirebase = () => {
  return signOut(auth);
};
