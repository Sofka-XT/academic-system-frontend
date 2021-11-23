export const LOADING = 'LOADING';
export const LOADED_SUCCESS = 'LOADED_SUCCESS';
export const LOADED_FAILURE = 'LOADED_FAILURE';

export const success = (payload) => ({
  type: LOADED_SUCCESS,
  payload,
});

export const loading = () => ({ type: LOADING });

export const setPost = (payload) => ({
  type: LOADED_SUCCESS,
  payload: payload,
});
