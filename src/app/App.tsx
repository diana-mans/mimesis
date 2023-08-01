import './styles/index.scss';
import { MainPage } from '../pages/MainPage';
import { useTheme } from './providers/ThemeProvider';
import { isNY } from '../features/isNY';

function App() {
  let newYear = isNY() ? 'newYear' : '';
  const { theme } = useTheme();
  return (
    <div className={`app ${theme} ${newYear}`}>
      <MainPage />
    </div>
  );
}

export default App;
