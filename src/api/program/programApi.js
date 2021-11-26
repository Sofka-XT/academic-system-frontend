import { enviroment } from '../../environments/enviroment';

const URL_BASE = "http://localhost:8080";

export const fetchProgramsApi = () => {
    return fetch(`${URL_BASE}/program/getAll`)
}

export const deleteProgramByIdApi = (id) => {
    return fetch(`${URL_BASE}/program/delete/${id}`,
    {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export const getAllcoursesApi = () => {
    return fetch(`${URL_BASE}/course/getAll`)
}

export const postProgramApi = (data) => {

    console.log(data);
    return fetch(`${URL_BASE}/program/create`,
    {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
export const getProgramByIdApi = (id) => {
  return fetch(`${URL_BASE}/program/get/${id}`,
  {
      method: 'GET',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  })
}

export const updateProgramApi = (data) => {
  return fetch(`${URL_BASE}/program/update`,
  {
      method: 'PUT',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
}
