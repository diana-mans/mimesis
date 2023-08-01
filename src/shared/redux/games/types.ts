import { ReactElement } from 'react';

export interface GameObj {
  name: string;
  category: number[];
  avatar?: ReactElement;
  info: string;
  gameLink: string;
}

export interface GamesSliceState {
  games: GameObj[];
}
