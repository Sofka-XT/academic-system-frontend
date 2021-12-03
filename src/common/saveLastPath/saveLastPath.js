export const saveLastPathWhenReload = () => {
    sessionStorage.setItem('reloaded', document.location.hash);
}