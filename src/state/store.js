import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import activeTrainingReducer from './ActiveTraining/activeTrainingReducer';
import thunk from 'redux-thunk';
import coursesReducer from './Courses/coursesReducer';

export default configureStore({
  reducer: {
    authReducer,
    coursesReducer,
    activeTrainingReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
