import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/authReducer";
import crudTrainingReducer from "./crudTraining/crudTrainingReducer";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    authReducer,
    crudTrainingReducer,
  },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().concat(thunk),
});
