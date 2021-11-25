export const fetchProgramsApi = () => {
    return fetch('http://localhost:8080/program/getAll')
}

export const deleteProgramByIdApi = (id) => {
    return fetch(`http://localhost:8080/program/delete/${id}`,
    {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export const getAllcourses = () => {
    return fetch('http://localhost:8080/course/getAll')
}

export const postProgram = (data) => {
    return fetch('http://localhost:8080/program/create',
    {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const getProgramByIdApi = (id) => {
  return fetch(`http://localhost:8080/program/get/${id}`,
  {
      method: 'GET',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  })
}

export const updateProgramApi = (data) => {
  return fetch(`http://localhost:8080/program/update`,
  {
      method: 'PUT',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
}
