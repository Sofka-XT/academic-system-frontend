import { fetchProgramsApi } from '../api/program/programApi';
import { 
    loading,
    fetchProgramsAction, 
    failure,
} from '../state/Program/programAction';


export const getProgramsThunk = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetchProgramsApi();
      const data = await response.json();
      dispatch(fetchProgramsAction({programs : data}));
    } catch (error) {
      dispatch(failure());
    }
  };
};