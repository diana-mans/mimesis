import VkIcon from '../../../assets/icons/VK.svg';
import OkIcon from '../../../assets/icons/Ok.svg';
import TgIcon from '../../../assets/icons/TG.svg';
import cls from './ShareComponent.module.scss';
import { VKShareButton, OKShareButton, TelegramShareButton } from 'react-share';

export const ShareComponent = () => {
  return (
    <div>
      <div className={cls.shareText}>Поделиться</div>
      <div className={cls.socialIcons}>
        <VKShareButton
          title="Мимесис"
          image="../../../assets/icons/OG-image.jpg"
          url="http://localhost:3000/">
          <VkIcon />
        </VKShareButton>
        <OKShareButton
          title="Мимесис"
          description="Играйте в игры Мимесис"
          image="../../../assets/icons/Game.svg"
          url="http://localhost:3000/">
          <OkIcon />
        </OKShareButton>
        <TelegramShareButton title="Мимесис" url="http://localhost:3000/">
          <TgIcon />
        </TelegramShareButton>
      </div>
    </div>
  );
};
