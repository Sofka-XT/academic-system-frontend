//url para prueba cambiar al tener la url real
const URL_BASE = 'https://jsonplaceholder.typicode.com/users';

export const getActiveTraining = () => {
    return fetch(URL_BASE);
};