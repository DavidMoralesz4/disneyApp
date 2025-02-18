import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer  from "./features/userAuthSlice";
import { authApi } from "./services/authApi";
import { charApi } from "./services/charApi";

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [charApi.reducerPath]: charApi.reducer
    ////
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(charApi.middleware)
      ////
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch= typeof store.dispatch;

export type AppStore = typeof store;
