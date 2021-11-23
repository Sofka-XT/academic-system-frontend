import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { enviroment } from '../../environments/enviroment';

export const app = initializeApp(enviroment.firabase);
export const auth = getAuth();
export const db = getFirestore();


