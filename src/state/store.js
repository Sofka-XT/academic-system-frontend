import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import postReducer from './Post/postReducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    authReducer,
    postReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
