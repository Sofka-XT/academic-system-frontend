import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import thunk from 'redux-thunk';
import coursesReducer from './Courses/coursesReducer';

export default configureStore({
  reducer: {
    authReducer,
    coursesReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
