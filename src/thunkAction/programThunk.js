import {
  deleteProgramByIdApi,
  getProgramByIdApi,
  updateProgramApi,
  fetchProgramsApi,
  getAllcoursesApi,
  postProgramApi,
} from "../api/program/programApi";
import { loading, failure, success } from "../state/Program/programAction";

export const getProgramsThunk = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetchProgramsApi();
      const data = await response.json();
      console.log(data)
      dispatch(success({ programs: data, redirect: null }));
    } catch (error) {
      dispatch(failure());
    }
  };
};

export const getCoursesThunk = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await getAllcoursesApi();
      const data = await response.json();
      dispatch(success({ courses: data, redirect: null }));
    } catch (error) {
      dispatch(failure());
    }
  };
};

export const deleteProgramByIdThunk = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await deleteProgramByIdApi(id);
      dispatch(success({ redirect: "/programs" }));
    } catch (error) {
      dispatch(failure());
    }
  };
};

export const getProgramByIdThunk = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await getProgramByIdApi(id);
      const data = await response.json();
      dispatch(success({ program: data, redirect: null }));
    } catch (error) {
      dispatch(failure());
    }
  };
};

export const updateProgramThunk = (program) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await updateProgramApi(program);
      dispatch(success({redirect: "/programs"}));
    } catch (error) {
      dispatch(failure());
    }
  };
};

export const postProgramThunk = (program) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await postProgramApi(program);
      dispatch(success({redirect: "/programs"}));
    } catch (error) {
      dispatch(failure());
    }
  };
};

// export const putProgramThunk = (program) => {
//   return async (dispatch) => {
//     dispatch(loading());
//     try {
//       await putProgramByIdApi(program);
//       dispatch(success({ redirect: "/programs" }));
//     } catch (error) {
//       dispatch(failure());
//     }
//   };
// };