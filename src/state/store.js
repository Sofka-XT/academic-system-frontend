import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import thunk from 'redux-thunk';
import getReducer from '../state/Get/getReducer'

export default configureStore({
  reducer: {
    authReducer,
    getReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
