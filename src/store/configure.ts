import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import reducers, { AppState } from './index';

export default function configureStore(): Store<AppState> {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    middlewares.push(require('redux-logger').default);
  }

  return createStore(reducers, applyMiddleware(...middlewares));
}
