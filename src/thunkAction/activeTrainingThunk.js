import { getActiveTrainingApi } from "../api/activeTraining/activeTrainingRequest";
import {
  loading,
  success,
  failure,
} from "../state/ActiveTraining/activeTrainingAction";

export const getActiveTrainingThunk = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await getActiveTrainingApi();
      const data = await response.json();
      dispatch(success({ activeTrainings: data, redirect: null }));
    } catch (error) {
      dispatch(failure());
    }
  };
};
