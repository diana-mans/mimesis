import cls from './GamesComponent.module.scss';
import FolderIcon from '../../../shared/assets/icons/Folder.svg';
import CloseIcon from '../../../shared/assets/icons/cross.svg';
import Avatar from '../../../shared/assets/icons/Game.svg';
import { useEffect } from 'react';
import { GameObj } from '../../../shared/redux/games/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/redux/store';
import { setGames } from '../../../shared/redux/games/slice';
import { GameItem } from '../../../shared/ui/GameItem';

export const GamesComponent = () => {
  const games = useSelector((state: RootState) => state.games.games);
  const dispatch = useDispatch();

  const gameExample: GameObj = {
    name: 'Эсперты',
    category: [0, 1],
    avatar: <Avatar />,
    info: 'Душные кликуши появляются и тут и там. Защитись от их «экспертных» оценок — прицелься и отправляй их в космос!',
    gameLink: 'https://pav.studio/',
  };

  useEffect(() => {
    const gamesDown: GameObj[] = [];
    for (let i = 0; i <= 20; i++) {
      gamesDown.push(gameExample);
    }
    dispatch(setGames(gamesDown));
  }, []);
  return (
    <div className={cls.GameComponent}>
      <div className={cls.header}>
        <div className={cls.headerItem}>
          <FolderIcon className={cls.folderIcon} />
          <h2>Игры</h2>
        </div>
        <CloseIcon className={cls.CloseIcon} />
      </div>

      <div className={cls.GamesContainer}>
        {games.map((el, i) => (
          <GameItem key={i} {...el} />
        ))}
      </div>
    </div>
  );
};
