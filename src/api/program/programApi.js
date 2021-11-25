export const fetchProgramsApi = () => {
    return fetch('http://localhost:3001/programs')
}

export const deleteProgramByIdApi = (id) => {
    return fetch(`http://localhost:3001/programs/${id}`,
    {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export const getAllcourses = () => {
    return fetch('http://localhost:3002/courses')
}

export const postProgram = (data) => {

    console.log(data);
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
  return fetch(`http://localhost:3001/programs/${id}`,
  {
      method: 'GET',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
  })
}

export const updateProgramApi = (program) => {
  return fetch(`http://localhost:3001/programs/updatePrograms`,
  {
      method: 'PUT',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(program)
  })
}
