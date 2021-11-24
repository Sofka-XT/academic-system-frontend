//url para prueba cambiar al tener la url real
//const URL_BASE = 'https://jsonplaceholder.typicode.com/users';
const URL_BASE='http://localhost:8080/training/list-actives'
export const getActiveTrainingApi = () => {
    return fetch(URL_BASE);
};