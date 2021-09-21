import { combineReducers } from 'redux';
import userState from './user';
import { Action } from './user/types';

const rootReducer = combineReducers({
  userState,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reducer = (state: any, action: Action) => {
  return rootReducer(state, action);
};

export default reducer;
export type AppState = ReturnType<typeof rootReducer>;
