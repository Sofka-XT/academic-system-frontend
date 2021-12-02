export function getApprenticeProfile(email)
{
    const URL_BASE = "http://localhost:8080/";
    return fetch(`${URL_BASE}profile/${email}`);
}