import { getTrainingByIdApi } from '../api/activeTraining/activeTrainingRequest';
import { 
    loading,
    success, 
    failure,
} from '../state/ActiveTraining/activeTrainingAction';


export const getTrainingByIdThunk = (id) => {
    console.log(id)
    return async (dispatch) => {
        dispatch(loading());
        try {
        const response = await getTrainingByIdApi(id);
        const data = await response.json();
        dispatch(success({training : data, redirect: null}));
        } catch (error) {
        dispatch(failure());
        }
    };
};