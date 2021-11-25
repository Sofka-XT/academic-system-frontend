import * as actions from './programAction';

export const initialState = {
  programs: [],
  programCreate:[],
  program: {},
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
    case actions.UPDATED_CURRENTPROGRAM:
      return { ...state, program: { ...state.program, courses: state.program.courses.map((course) => {
        if(course.courseId === action.payload.courseId){
          course = { ...course, categories: course.categories.map((category) => {
            if(category.categoryId === action.payload.categoryId){
              category = { ...category, days : action.payload.days }
              return category
            } 
            return category
          })}
          return course
        }
        return course
      })}}
    case actions.CREATE_PROGRAM:
      return { ...state,  programCreate:action.payload };

    case actions.DELETED_COURSEBYID:
      return {...state, program: {...state.program, courses: state.program.courses.filter((course) => course.courseId !== action.payload.courseId)}} 
    default:
      return state;
  }
}