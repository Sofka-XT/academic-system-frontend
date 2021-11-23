import * as actions from "./activeTrainingAction";

export const initialState = {
    activeTrainings: [],
    hasErrors: false,
    loading: false,
    redirect: null,
};

export default function activeTrainingReducer(state = initialState, action) {
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
