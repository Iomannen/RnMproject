import { configureStore } from '@reduxjs/toolkit';
import { RnmAPI } from './RnMAPI.ts';

export const store = configureStore({
  reducer: { [RnmAPI.reducerPath]: RnmAPI.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RnmAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
