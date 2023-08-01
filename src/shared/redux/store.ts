import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import games from './games/slice';
import chooseGame from './chooseGame/slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: { games, filter, chooseGame },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
