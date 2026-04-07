import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { extraMiddleware, serializableCheckMiddleware } from "./middleware";
import rootReducer, { type RootState } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(serializableCheckMiddleware).concat(extraMiddleware),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type { RootState };

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

