export const LOADING = "LOADING";
export const LOADED_SUCCESS = "LOADED_SUCCESS";
export const LOADED_FAILURE = "LOADED_FAILURE";
export const UPDATED_PROGRAM = "UPDATED_PROGRAM";
export const UPDATED_CURRENTPROGRAM = "UPDATED_CURRENTPROGRAM";
export const DELETED_COURSEBYID = "DELETED_COURSEBYID";

export const success = (payload) => ({
  type: LOADED_SUCCESS,
  payload,
});

export const loading = () => ({ type: LOADING });

export const failure = () => ({ type: LOADED_FAILURE });

export const updated = () => ({ type: UPDATED_PROGRAM})

export const updateCurrentProgram = (data) => ({ type: UPDATED_CURRENTPROGRAM, payload: data})

export const deleteCourseById = (id) => ({ type: DELETED_COURSEBYID })