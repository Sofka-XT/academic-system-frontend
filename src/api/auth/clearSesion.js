export const clearSesion = () => {

    window.localStorage.setItem(
        'loggedUser', null
    )    

}