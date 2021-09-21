import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch, ActionCreator } from 'redux';
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

import { GetUserInterface } from '../../interfaces/user';

import { api } from '../../services/api';

import { AppState } from '../index';
import { Action as FetchAction, ActionTypes } from './types';

export const authenticate: ActionCreator<ThunkAction<void, AppState, null, Action<FetchAction>>> =
  (search: string, handleError: (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey) =>
    async (dispatch: Dispatch<FetchAction>): Promise<void | string> => {
      localStorage.removeItem('@Memed:user-token');
      dispatch({
        type: ActionTypes.AUTHENTICATION,
        rendering: false,
      });

      try {
        const { data }: GetUserInterface = await api.get(`user/search/${search}`);

        dispatch({
          type: ActionTypes.AUTHENTICATION_SUCCESS,
          userToken: data?.userToken,
          user: data?.user,
        });
        localStorage.setItem('@Memed:user-token', data?.userToken);
      } catch (err: any) {
        const error = err?.response?.data?.error || err.message;

        dispatch({
          type: ActionTypes.AUTHENTICATION_ERROR,
          error,
        });

        handleError(error, { variant: 'error' });
      }
    };

export const authenticateToken: ActionCreator<ThunkAction<void, AppState, null, Action<FetchAction>>> =
  (token: string) =>
    async (dispatch: Dispatch<FetchAction>): Promise<void | string> => {
      localStorage.removeItem('@Memed:user-token');
      dispatch({
        type: ActionTypes.AUTHENTICATION,
        rendering: true,
      });

      try {
        const { data }: GetUserInterface = await api.get(`user/${token}`);

        dispatch({
          type: ActionTypes.AUTHENTICATION_SUCCESS,
          userToken: data?.userToken,
          user: data?.user,
        });
        localStorage.setItem('@Memed:user-token', data?.userToken);
      } catch (err: any) {
        const error = err?.response?.data?.error || err.message;

        dispatch({
          type: ActionTypes.AUTHENTICATION_ERROR,
          error,
        });
      }
    };

export const resetState: ActionCreator<ThunkAction<void, AppState, null, Action<FetchAction>>> =
  () =>
    (dispatch: Dispatch<FetchAction>): void => {
      localStorage.removeItem('@Memed:user-token');
      dispatch({
        type: ActionTypes.RESET_STATE,
      });
    };

export const finishRendering: ActionCreator<ThunkAction<void, AppState, null, Action<FetchAction>>> =
  () =>
    (dispatch: Dispatch<FetchAction>): void => {
      dispatch({
        type: ActionTypes.FINISH_RENDERING,
      });
    };
;
