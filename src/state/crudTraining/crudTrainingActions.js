const URL_BASE = "http://localhost:8080";

export const LOADING = "LOADING";
export const LOADED_SUCCESS = "LOADED_SUCCESS";
export const LOADED_FAILURE = "LOADED_FAILURE";
export const POST_PROGRAM_SUCCESS = "POST_PORGRAM_SUCCES";
export const ADD_LIST_PROGRAMS = "ADD_LIST_PROGRAMS";
export const ADD_PROGRAM_SELECTED = "ADD_PROGRAM_SELECTED";



export const loading = () => ({ type: LOADING });

export const postTrainingSuccess = (payload) => ({
  type: POST_PROGRAM_SUCCESS,
  payload
});

export const failure = () => ({ type: LOADED_FAILURE });

// export function fetchPrograms() {
//   return async () => {
//     try {
//       const response = await fetch(`${URL_BASE}/program/getAll`);
//       return await response.json();
//     } catch (e) {
//       return await Error(
//         "An error acurred in the axecution of fetchig all the grograms"
//       );
//     }
//   };
// }

export const fetchPrograms=async()=> {
      try {
        const response = await fetch(`${URL_BASE}/program/getAll`);
        return await response.json();
      } catch (e) {
        return await Error(
          "An error acurred in the axecution of fetchig all the grograms"
        );
      }
  }

export function postTraining(training) {
  //   {
  //     "name": "Training Qa",
  //     "startingDate": "2021-12-21",
  //     "apprentices": [{
  //         "id": "123kisdha8",
  //         "name": "Pedro",
  //         "phoneNumber": "21232454",
  //         "emailAddress": "santiago@gmail.com"

  //     },
  //     {
  //         "id": "qwedfws44ef",
  //         "name": "Camilo",
  //         "phoneNumber": "234dfsdt",
  //         "emailAddress": "camilo@gmail.com"

  //     }
  //     ],
  //     "coaches": [{
  //         "id": "wagary55",
  //         "name": "Raul",
  //         "phoneNumber": "12355656",
  //         "emailAddress": "raul@gmail.com"
  //     }],
  //     "program": "123iasdias909"
  // }

  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetch(`${URL_BASE}/CreateTraining`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(training),
      });
      const data = await response.json();
      dispatch(
        postTrainingSuccess({
          trainingId: data.trainingId,
          name: data.name,
          program: data.program,
          startingDate: data.startingDate,
          apprentices: data.apprentices,
          coaches: data.coaches,
        })
      );
    } catch (error) {
      dispatch(failure());
    }
  };
}
