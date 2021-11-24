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
