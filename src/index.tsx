import { render } from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { ThemeProvider } from './theme/theme-provider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
