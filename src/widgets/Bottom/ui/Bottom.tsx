import { ShareComponent } from '../../../shared/ui/ShareComponent';
import { ThemeSwitcher } from '../../../shared/ui/ThemeSwitcher';
import cls from './Bottom.module.scss';

export const Bottom = () => {
  return (
    <div className={cls.Bottom}>
      <ShareComponent />
      <ThemeSwitcher />
    </div>
  );
};
