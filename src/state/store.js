import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authReducer';
import programReducer from './Program/programReducer';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    authReducer,
    programReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
