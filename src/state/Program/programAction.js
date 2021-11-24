export const LOADING = 'LOADING';
export const LOADED_SUCCESS = 'LOADED_SUCCESS';
export const LOADED_FAILURE = 'LOADED_FAILURE';
export const CREATE_PROGRAM = 'CREATE_PROGRAM';
export const UPDATED_PROGRAM = "UPDATED_PROGRAM";

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
