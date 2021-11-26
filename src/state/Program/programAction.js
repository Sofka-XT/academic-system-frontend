export const LOADING = 'LOADING';
export const LOADED_SUCCESS = 'LOADED_SUCCESS';
export const LOADED_FAILURE = 'LOADED_FAILURE';
export const CREATE_PROGRAM = 'CREATE_PROGRAM';
export const UPDATED_PROGRAM = "UPDATED_PROGRAM";
export const UPDATED_DAYSCURRENTPROGRAM = "UPDATED_DAYSCURRENTPROGRAM";
export const DELETED_COURSEBYID = "DELETED_COURSEBYID";
export const UPDATE_NAMEPROGRAM = "UPDATE_NAMEPROGRAM";
export const UPDATE_TOTALDAYS = "UPDATE_TOTALDAYS";
export const UPDATE_NAMECURRENTPROGRAM = "UPDATE_NAMECURRENTPROGRAM"
export const UPDATED_CURRENTPROGRAM = "UPDATED_CURRENTPROGRAM"
export const ADD_COURSETOCURRENTPROGRAM = "ADD_COURSETOCURRENTPROGRAM"

export const success = (payload) => ({
  type: LOADED_SUCCESS,
  payload,
});

export const loading = () => ({ type: LOADING });

export const failure = () => ({ type: LOADED_FAILURE });

export const createProgram = (payload) => ({
  type: CREATE_PROGRAM,
  payload,
});
export const updated = () => ({ type: UPDATED_PROGRAM})

export const updateDaysCurrentProgram = (data) => ({ type: UPDATED_DAYSCURRENTPROGRAM, payload: data})

export const deleteCourseById = (data) => ({ type: DELETED_COURSEBYID, payload: data })

export const updateNameProgram = (data) => ({ type: UPDATE_NAMEPROGRAM, payload: data})

export const updateTotalDays = (data) => ({ type: UPDATE_TOTALDAYS, payload: data })

export const updateNameCurrentProgram = (data) => ({ type: UPDATE_NAMECURRENTPROGRAM, payload: data})

export const updateCurrentProgram = (data) => ({ type: UPDATED_CURRENTPROGRAM, payload: data})

export const AddCourseToCurrentProgram = (data) => ({ type:ADD_COURSETOCURRENTPROGRAM, payload: data})

