import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../shared/redux/store';
import { GameInfo } from '../../../widgets/GameInfo';
import { Bottom } from '../../../widgets/Bottom';
import { GamesComponent } from '../../../widgets/GamesComponent';
import { MimesisComponent } from '../../../widgets/MimesisComponent';

export const MainPage = () => {
  const isVisible = useSelector((state: RootState) => state.chooseGame.isVisible);

  return (
    <div>
      <MimesisComponent />
      <GamesComponent />
      <Bottom />
      {isVisible && <GameInfo />}
    </div>
  );
};
