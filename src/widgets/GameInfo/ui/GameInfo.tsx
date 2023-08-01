import cls from './GameInfo.module.scss';
import FolderIcon from '../../../shared/assets/icons/Folder.svg';
import AvatarIcon from '../../../shared/assets/icons/Game.svg';
import CloseIcon from '../../../shared/assets/icons/cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setIsVisible } from '../../../shared/redux/chooseGame/slice';
import { RootState } from '../../../shared/redux/store';
import { useEffect } from 'react';

export const GameInfo = () => {
  const dispatch = useDispatch();
  const chooseGame = useSelector((state: RootState) => state.chooseGame.game);
  return (
    <div className={cls.GameInfo}>
      <div className={cls.infoContainer}>
        <div className={cls.header}>
          <div className={cls.headerItem}>
            <FolderIcon className={cls.folderIcon} />
            <h2>Игры</h2>
            <AvatarIcon className={cls.avatarIconMini} />
            <h2>{chooseGame.name}</h2>
          </div>
          <CloseIcon className={cls.CloseIcon} onClick={() => dispatch(setIsVisible(false))} />
        </div>
        <div className={cls.container}>
          <AvatarIcon className={cls.avatarIcon} />
          <div className={cls.description}>ОТПРАВЬ "ЭКСПЕРТОВ" В КОСМОС</div>
          <p>{chooseGame.info}</p>
          <div className={cls.choose}>
            <div>
              <a href="https://pav.studio/" target="_blank">
                Читать
              </a>
            </div>
            <div className={cls.choosePlay}>
              <a href="https://pav.studio/" target="_blank">
                Играть
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
