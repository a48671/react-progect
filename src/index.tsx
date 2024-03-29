import { render } from 'react-dom';
import { App } from 'app';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers/theme-provider';
import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
