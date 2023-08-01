import { useTheme } from '../../../../app/providers/ThemeProvider';
import { Theme } from '../../../../app/providers/ThemeProvider/lib/ThemeContext';
import cls from './ThemeSwitcher.module.scss';
import Switch from '../../../assets/icons/Switch.svg';
import Circle from '../../../assets/icons/Circle.svg';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const toggleText = theme === Theme.LIGHT ? 'ON' : 'OFF';
  return (
    <div className={cls.ThemeSwitcher}>
      <div className={cls.toggleText}>{toggleText}</div>
      <div className={cls.switcherGroup} onClick={toggleTheme}>
        <Switch className={cls.switch} />
        <Circle className={cls.circle} />
      </div>
    </div>
  );
};
