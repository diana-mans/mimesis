import { useDispatch } from 'react-redux';
import { setIsVisible, setChooseGame } from '../../../redux/chooseGame/slice';
import { GameObj } from '../../../redux/games/types';
import cls from './GameItem.module.scss';

export const GameItem = (props: GameObj) => {
  const { name, avatar } = props;
  const dispatch = useDispatch();
  const setChoise = () => {
    dispatch(setIsVisible(true));
    dispatch(setChooseGame(props));
  };
  return (
    <div className={cls.gameItem} onClick={() => setChoise()}>
      <div className={cls.gameAvatar}>{avatar}</div>
      <div className={cls.gameName}>{name}</div>
    </div>
  );
};
