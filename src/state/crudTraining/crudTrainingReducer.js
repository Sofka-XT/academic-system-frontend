import * as actions from "./crudTrainingActions";

export const initialState = {
  loading: true,
  trainings: [],
  training: {
    name: "",
    programId: "",
    startingDate: new Date(),
    apprenticesList: [],
    coachesList: [],
  },
  programs: [],
  redirect: null,
  hasErrors: false,
};

export default function crudTrainingReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: true };
    case actions.POST_PROGRAM_SUCCESS:
      return {
        ...state,
        training: action.payload,
        loading: false,
        redirect: null,
        hasErrors: false,
      };
    case actions.ADD_LIST_PROGRAMS:
      return {
        ...state,
        programs: action.payload,
        loading: false,
        redirect: null,
        hasErrors: false,
      };
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
