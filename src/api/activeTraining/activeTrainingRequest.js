//url para prueba cambiar al tener la url real
//const URL_BASE = 'https://jsonplaceholder.typicode.com/users'
export const getActiveTrainingApi = () => {;
const URL_BASE='http://localhost:8080/training/list-actives'
    return fetch(URL_BASE);
};