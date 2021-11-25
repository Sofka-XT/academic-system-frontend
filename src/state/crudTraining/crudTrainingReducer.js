import * as actions from "./crudTrainingActions";

export const initialState = {
  loading: true,
  trainings: [],
  training: {
    name: "",
    program: "",
    startingDate: new Date(),
    apprentices: [],
    coaches: [],
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
    case actions.ADD_PROGRAM_SELECTED:
      const trainingWithProgram = { ...state.training };
      trainingWithProgram.program = action.payload;

      return {
        ...state,
        training: trainingWithProgram,
        loading: false,
        redirect: null,
        hasErrors: false,
      };
    case actions.ADD_LIST_APPRENTICES:
      const trainingWithApprentices = { ...state.training };
      trainingWithApprentices.apprentices = action.payload;

      return {
        ...state,
        training: trainingWithApprentices,
        loading: false,
        redirect: null,
        hasErrors: false,
      };
    case actions.ADD_TRAINING_NAME:
      const trainingWithName = { ...state.training };
      trainingWithName.name = action.payload;

      return {
        ...state,
        training: trainingWithName,
        loading: false,
        redirect: null,
        hasErrors: false,
      };
    case actions.ADD_COACHES_LIST:
      const trainingWithCoachList = { ...state.training };
      trainingWithCoachList.coaches = action.payload;

      return {
        ...state,
        training: trainingWithCoachList,
        loading: false,
        redirect: null,
        hasErrors: false,
      };
    case actions.ADD_COACHES_LIST:
      const trainingWithStartingDate = { ...state.training };
      trainingWithStartingDate.startingDate = action.payload;

      return {
        ...state,
        training: trainingWithStartingDate,
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
