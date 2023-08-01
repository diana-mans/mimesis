import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameObj } from '../games/types';
import { ChooseGameSliceState } from './types';

const initialState: ChooseGameSliceState = {
  isVisible: false,
  game: {
    name: '',
    category: [],
    info: '',
    gameLink: '',
  },
};

export const chooseGame = createSlice({
  name: 'chooseGame',
  initialState,
  reducers: {
    setIsVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
    setChooseGame(state, action: PayloadAction<GameObj>) {
      state.game = action.payload;
    },
  },
});

export const { setIsVisible, setChooseGame } = chooseGame.actions;

export default chooseGame.reducer;
