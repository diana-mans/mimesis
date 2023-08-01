import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import store from './shared/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);
