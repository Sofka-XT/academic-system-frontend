export const FB_API_KEY = process.env.REACT_APP_API_FB_KEY;
export const FB_AUTH_DOMAIN = process.env.REACT_APP_FB_AUTH_DOMAIN;
export const FB_DATABASE_URL = process.env.REACT_APP_FB_DATABASE_URL;
export const FB_PROJECT_ID = process.env.REACT_APP_FB_PROJECT_ID;
export const FB_STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET;
export const FB_MESSAGING_SENDER_ID = process.env.REACT_APP_FB_MESSAGING_SENDER_ID;
export const HOST_API = process.env.REACT_APP_HOST_API;

export const enviroment = {
  firabase: {
    apiKey: FB_API_KEY || 'AIzaSyDAGnCkXYQf_toW_TqV4n6GDBUiYOzMsMw',
    authDomain: FB_AUTH_DOMAIN || 'academic-system-sofkau.firebaseapp.com',
    projectId: FB_PROJECT_ID || 'academic-system-sofkau',
    storageBucket: FB_STORAGE_BUCKET ||'academic-system-sofkau.appspot.com',
    messagingSenderId: FB_MESSAGING_SENDER_ID || '27962594566',
  },
  host: HOST_API || "http://localhost:8080"
};

