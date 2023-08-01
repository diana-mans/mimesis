import cls from './MimesisComponent.module.scss';
import CloseIcon from '../../../shared/assets/icons/Cross.svg';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../../../shared/redux/filter/slice';
import { WindowIcon } from '../../../shared/ui/WindowIcon';
import NYTree from '../../../shared/assets/icons/NY-tree.svg';
import NYSanta from '../../../shared/assets/icons/NY-santa.svg';
import NYSnowMan from '../../../shared/assets/icons/NY-snowman.svg';
import { isNY } from '../../../features/isNY';
import { useTheme } from '../../../app/providers/ThemeProvider';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

export const MimesisComponent = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  return (
    <div className={cls.MimesisComponent}>
      <div className={cls.container}>
        <div className={cls.header}>
          <div className={cls.headerItem}>
            <WindowIcon />
            <h1>Мимесиc</h1>
            {isNY() && theme === Theme.DARK ? <NYTree className={cls.NYTree} /> : <></>}
            {isNY() && theme === Theme.DARK ? <NYSanta className={cls.NYSanta} /> : <></>}
            {isNY() && theme === Theme.DARK ? <NYSnowMan className={cls.NYSnowMan} /> : <></>}
          </div>
          <CloseIcon className={cls.CloseIcon} />
        </div>
        <div>
          <div className={cls.changeCounrty}>
            <div onClick={() => dispatch(setCategoryId([0, 1]))}>Все</div>
            <div onClick={() => dispatch(setCategoryId([0]))} className={cls.secondChild}>
              Россия
            </div>
            <div onClick={() => dispatch(setCategoryId([1]))}>Международные</div>
          </div>
        </div>
      </div>
    </div>
  );
};
