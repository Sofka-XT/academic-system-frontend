import { enviroment } from "../../environments/enviroment";
import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from "../../config/firebase/firebase.config";

const URL_BASE = enviroment.host;

export const LOADING = "LOADING";
export const LOADED_SUCCESS = "LOADED_SUCCESS";
export const LOADED_FAILURE = "LOADED_FAILURE";
export const POST_TRAINING_SUCCESS = "POST_TRAINING_SUCCESS";
export const ADD_LIST_PROGRAMS = "ADD_LIST_PROGRAMS";
export const ADD_LIST_APPRENTICES = "ADD_LIST_APPRENTICES";
export const ADD_PROGRAM_SELECTED = "ADD_PROGRAM_SELECTED";
export const ADD_COACHES_LIST = "ADD_COACHES_LIST";
export const ADD_TRAINING_NAME = "ADD_TRAINING_NAME";
export const SET_STARTING_DATE = "SET_STARTING_DATE";
export const UPDATE_INFO_GLOBAL_BEFORE_POSTING_TRAINING =
  "UPDATE_INFO_GLOBAL_BEFORE_POSTING_TRAINING";

export const loading = () => ({ type: LOADING });

export const endLoading = () => ({ type: LOADED_SUCCESS });

export const postTrainingSuccess = (payload) => ({
  type: POST_TRAINING_SUCCESS,
  payload,
});

export const failure = () => ({ type: LOADED_FAILURE });

export const fetchPrograms = async () => {
  try {
    const response = await fetch(`${URL_BASE}program/getAll`);
    return await response.json();
  } catch (e) {
    return await Error(
      "An error acurred in the axecution of fetchig all the grograms"
    );
  }
};

export function postTraining(training) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}CreateTraining`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(training),
      });
      const data = await response.json();
      console.log(data);
      dispatch(
        postTrainingSuccess({
          trainingId: data.trainingId,
          name: data.name,
          program: data.program,
          startingDate: data.startingDate,
          apprentices: data.apprentices,
          coaches: data.coaches,
          categoriesToScrapCalendar: data.categoriesToScrapCalendar,
        })
      );
    } catch (error) {
      dispatch(failure());
    }
  };
}
export const fetchCoachesFromFirebase = async () => {
  const q = query(collection(db, "user"), where("tipo", "==", "COACH"));
  const queryFromFirebase = await getDocs(q);
  const coaches = [{
    id: "0",
    name: "Seleccione al menos un coach",
  }]
  
  queryFromFirebase.forEach(doc => (
    coaches.push({ 
      id: doc.id,
      name: doc?.name || "Nombre del caoch",
      emailAddress: doc.id,
      phoneNumber: doc?.phoneNumber,
    })))

  return coaches;
}


export const fetchCoaches = () => {
  // eslint-disable-next-line no-sparse-arrays
  return [
    {
      id: "0",
      name: "Seleccione al menos un coach",
    },
    {
      id: "1",
      name: "Raul Andres Alzate",
      emailAddress: "raul@gmail.com",
      phoneNumber: "32325465456",
    },
    {
      id: "2",
      name: "Pablo Armando Valencia",
      emailAddress: "pablo@gmail.com",
      phoneNumber: "3324345356",
    },
    {
      id: "3",
      name: "Oscar Mejia Restrepo",
      emailAddress: "oscar@gmail.com",
      phoneNumber: "31243544656",
    },
    ,
    {
      id: "4",
      name: "Luis Villada Monsalve",
      emailAddress: "luis@gmail.com",
      phoneNumber: "3453454353",
    },
    ,
    {
      id: "5",
      name: "Mario Castrillón Mejia",
      emailAddress: "mario@gmail.com",
      phoneNumber: "3322543565466",
    },
  ];
};
