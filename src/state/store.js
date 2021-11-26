import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import programReducer from './Program/programReducer';
import activeTrainingReducer from './ActiveTraining/activeTrainingReducer';
import thunk from 'redux-thunk';
import coursesReducer from './Courses/coursesReducer';

export default configureStore({
  reducer: {
    authReducer,
    programReducer,
    coursesReducer,
    activeTrainingReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
