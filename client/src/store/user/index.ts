import { UserState, ActionTypes, Action } from './types';
import { UserInterface } from '../../interfaces/user';

const INITIAL_STATE: UserState = {
  error: '',
  loading: false,
  rendering: true,
  userToken: '',
  user: {} as UserInterface,
};

export default function reducer(state = INITIAL_STATE, action: Action): UserState {
  switch (action.type) {
    case ActionTypes.RESET_STATE:
      return {
        ...INITIAL_STATE,
        rendering: false,
      };

    case ActionTypes.AUTHENTICATION:
      return {
        ...INITIAL_STATE,
        rendering: action.rendering,
        loading: true,
      };

    case ActionTypes.AUTHENTICATION_SUCCESS:
      return {
        error: '',
        loading: false,
        rendering: false,
        userToken: action.userToken,
        user: action.user,
      };

    case ActionTypes.AUTHENTICATION_ERROR:
      return {
        ...INITIAL_STATE,
        error: action.error,
        rendering: false,
      };

    case ActionTypes.FINISH_RENDERING:
      return {
        ...state,
        rendering: false,
      };

    default:
      return state;
  }
}
