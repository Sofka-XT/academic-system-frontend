import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import programReducer from './Program/programReducer';
import thunk from 'redux-thunk';
import getReducer from '../state/Get/getReducer'

export default configureStore({
  reducer: {
    authReducer,
    getReducer,
    programReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
