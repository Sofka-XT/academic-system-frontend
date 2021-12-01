export const clearSesion = () => {

    window.localStorage.removeItem('loggedUser')
    sessionStorage.setItem('reloaded', '');

}