import React from 'react';
import ReactDOM from 'react-dom';

import Providers from './providers';
import App from './App';
import { FlexContainer, LoaderSpinner } from './components/ui';

ReactDOM.render(
  <React.Suspense
    fallback={
      // <body> native margins
      <FlexContainer height="calc(100vh - 16px)">
        <LoaderSpinner size={40} />
      </FlexContainer>
    }
  >
    <Providers>
      <App />
    </Providers>
  </React.Suspense>,
  document.getElementById('root')
);
