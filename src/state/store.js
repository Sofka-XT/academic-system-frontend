import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import activeTrainingReducer from './ActiveTraining/activeTrainingReducer';
import thunk from 'redux-thunk';
import coursesReducer from './Courses/coursesReducer';

export default configureStore({
  reducer: {
    authReducer,
<<<<<<< HEAD
    coursesReducer,
=======
    activeTrainingReducer,
>>>>>>> 956e62f406fe53742a6a737d5f929233ddf50992
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
