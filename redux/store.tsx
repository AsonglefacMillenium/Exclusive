import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/reducer";
import { useAppDispatch, useAppSelector } from './hooks';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        
        ignoredActions: [],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useAppDispatch, useAppSelector };
export default store;

