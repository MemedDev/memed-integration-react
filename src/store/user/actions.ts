import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch, ActionCreator } from 'redux';
import { OptionsObject, SnackbarKey, SnackbarMessage } from 'notistack';

import { GetUserInterface } from '../../interfaces/user';

import { apiMemed } from '../../services/api';

import { AppState } from '../index';
import { Action as FetchAction, ActionTypes } from './types';

export const authenticate: ActionCreator<ThunkAction<void, AppState, null, Action<FetchAction>>> =
  (search: string, handleError: (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey) =>
    async (dispatch: Dispatch<FetchAction>): Promise<void | string> => {
      localStorage.removeItem('@Memed:user-token');
      dispatch({
        type: ActionTypes.AUTHENTICATION,
      });

      try {
        const { data }: GetUserInterface = await apiMemed.get(`/v1/sinapse-prescricao/usuarios/${search}`);

        dispatch({
          type: ActionTypes.AUTHENTICATION_SUCCESS,
          userToken: data?.data?.attributes?.token,
          user: data?.data?.attributes,
        });
        localStorage.setItem('@Memed:user-token', data?.data?.attributes?.token);
      } catch (err: any) {
        const error = err?.response?.data?.errors.length > 0 ? err?.response?.data?.errors[0]?.detail : err.message;

        dispatch({
          type: ActionTypes.AUTHENTICATION_ERROR,
          error,
        });

        handleError(error, { variant: 'error' });
      }
    };

export const authenticateToken: ActionCreator<ThunkAction<void, AppState, null, Action<FetchAction>>> =
  (search: string) =>
    async (dispatch: Dispatch<FetchAction>): Promise<void | string> => {
      localStorage.removeItem('@Memed:user-token');
      dispatch({
        type: ActionTypes.AUTHENTICATION,
      });

      try {
        const { data }: GetUserInterface = await apiMemed.get(`/v1/usuarios?token=${search}`);

        dispatch({
          type: ActionTypes.AUTHENTICATION_SUCCESS,
          userToken: data?.data?.attributes?.token,
          user: data?.data?.attributes,
        });
        localStorage.setItem('@Memed:user-token', data?.data?.attributes?.token);
      } catch (err: any) {
        const error = err?.response?.data?.errors.length > 0 ? err?.response?.data?.errors[0]?.detail : err.message;

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
