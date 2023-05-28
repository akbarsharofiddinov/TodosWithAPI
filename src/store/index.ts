import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice/todosSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiRTK } from "./apiRTK/apiRTK";

export const store = configureStore({
  reducer: {
    todosSlice,
    [apiRTK.reducerPath]: apiRTK.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRTK.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
