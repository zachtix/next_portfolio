import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './project/reducer';

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
