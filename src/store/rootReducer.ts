import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import billingReducer from "./billingSlice";
import clientReducer from "./clientSlice";
import notificationReducer from "./notificationSlice";
import taskReducer from "./taskSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  clients: clientReducer,
  tasks: taskReducer,
  billing: billingReducer,
  notifications: notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

