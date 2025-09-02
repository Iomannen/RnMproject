import { configureStore } from '@reduxjs/toolkit';
import { RnmAPI, CatsAPI } from './RnMAPI.ts';

export const store = configureStore({
  reducer: {
    [RnmAPI.reducerPath]: RnmAPI.reducer,
    [CatsAPI.reducerPath]: CatsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RnmAPI.middleware, CatsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
