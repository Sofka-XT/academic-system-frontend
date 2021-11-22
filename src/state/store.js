import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    authReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
