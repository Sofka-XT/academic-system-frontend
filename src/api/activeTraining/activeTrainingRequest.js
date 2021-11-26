import { enviroment } from "../../environments/enviroment"
//url para prueba cambiar al tener la url real
//const URL_BASE = 'https://jsonplaceholder.typicode.com/users';
// const URL_BASE='https://vast-everglades-55825.herokuapp.com/training/list-actives'
const URL_BASE=enviroment.host;
//const URL_BASE='http://localhost:8080/training/list-actives'
export const getActiveTrainingApi = () => {
    return fetch(`${URL_BASE}training/list-actives`)
    //return fetch(URL_BASE);
};