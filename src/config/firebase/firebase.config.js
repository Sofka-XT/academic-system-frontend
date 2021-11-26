import { getFirestore } from '@firebase/firestore';
//compatibily sdk 8
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { enviroment } from '../../environments/enviroment';

export const app = initializeApp(enviroment.firabase);
export const auth = getAuth();
export const db = getFirestore();

export const appSdk8 = firebase.initializeApp(enviroment.firabase);
