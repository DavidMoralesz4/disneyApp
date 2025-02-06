import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer  from "./features/userAuthSlice";

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch= typeof store.dispatch;

export type AppStore = typeof store;
