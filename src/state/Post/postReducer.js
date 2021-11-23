import * as actions from './postAction';

export const initialState = {
  id: null,
  title: null,
  body: null,
  userId: null,
  loading: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: true };
    case actions.LOADED_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
