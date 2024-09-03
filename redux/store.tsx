import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/reducer";

import thunk from "redux-thunk";
import { useDispatch, useSelector, useStore } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
