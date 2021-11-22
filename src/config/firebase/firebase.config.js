import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { enviroment } from '../../environments/envoronment';

export const app = initializeApp(enviroment.firabase);
export const auth = getAuth();
