import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../redux/store';

import '../styles/global.css';

import defaultTheme from '../styles/themes';

const App = ({ Component, pageProps }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}


export default App
