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