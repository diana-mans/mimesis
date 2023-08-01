import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesSliceState, GameObj } from './types';

const initialState: GamesSliceState = {
  games: [],
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames(state, action: PayloadAction<GameObj[]>) {
      state.games = action.payload;
    },
  },
});

export const { setGames } = gamesSlice.actions;

export default gamesSlice.reducer;
