import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import activeTrainingReducer from './ActiveTraining/activeTrainingReducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    authReducer,
    activeTrainingReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
