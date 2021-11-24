import { enviroment } from "../../environments/enviroment"

const URL_BASE=enviroment.courseAPIurl;


export function fetchCourses(){
    return fetch(`${URL_BASE}/course/getAll`)
}

export function postCourse(course){
    return fetch(`${URL_BASE}/course/create`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(course)
                }
            )
}

export function deleteCourseById(id){
    return fetch(`${URL_BASE}/course/delete/${id}`,
                {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
}

export function updateCourse(course){
    return fetch(`${URL_BASE}/course/updatecourse`,
                {
                    method: 'PUT',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(course)
                }
            )
}