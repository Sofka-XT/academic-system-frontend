import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';

import coursesReducer from './Courses/coursesReducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    authReducer,
    coursesReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
