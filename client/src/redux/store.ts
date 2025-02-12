import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer  from "./features/userAuthSlice";
import { authApi } from "./services/authApi";

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    ////
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      ////
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch= typeof store.dispatch;

export type AppStore = typeof store;
