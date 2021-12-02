import { enviroment } from "../../environments/enviroment";

export function getApprenticeProfile(email)
{
    const URL_BASE = enviroment.host;
    return fetch(`${URL_BASE}profile/${email}`);
}