import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import activeTrainingReducer from './ActiveTraining/activeTrainingReducer';
import thunk from 'redux-thunk';
import coursesReducer from './Courses/coursesReducer';
import crudTraningReducer from './crudTraining/crudTrainingReducer'

export default configureStore({
  reducer: {
    authReducer,
    coursesReducer,
    activeTrainingReducer,
    crudTraningReducer
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
