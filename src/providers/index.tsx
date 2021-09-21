import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { CloseButton as SnackBarCloseButton } from '../components/application';

import configureStore from '../store/configure';

import { MemedProvider } from '../hooks';

import GlobalStyles from '../styles/GlobalStyles';
import { createTheme } from '../styles/theme';

interface Props {
  children?: ReactNode;
}

function Providers({ children }: Props) {
  const theme = createTheme();
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          autoHideDuration={3500}
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          action={key => <SnackBarCloseButton key={key} />}
        >
          <GlobalStyles />
          <MemedProvider> {children}</MemedProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;
