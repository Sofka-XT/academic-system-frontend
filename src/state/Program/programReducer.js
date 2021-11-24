import * as actions from './programAction';

export const initialState = {
  programs: [],
  programCreate:[],
  hasErrors: false,
  loading: false,
  redirect: null,
};

export default function programReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: true };
    case actions.LOADED_SUCCESS:
      return { ...state, ...action.payload, loading: false, hasErrors: false };
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case actions.CREATE_PROGRAM:
      return { ...state,  programCreate:action.payload };
    default:
      return state;
  }
}