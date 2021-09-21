/* eslint-disable no-unused-vars, no-shadow, max-len */
import { UserInterface } from '../../interfaces/user';

export interface UserState {
  readonly error: string;
  readonly loading: boolean;
  readonly rendering: boolean;
  readonly userToken: string;
  readonly user: UserInterface;
}

export enum ActionTypes {
  AUTHENTICATION = 'user/AUTHENTICATION',
  AUTHENTICATION_SUCCESS = 'user/AUTHENTICATION_SUCCESS',
  AUTHENTICATION_ERROR = 'user/AUTHENTICATION_ERROR',
  RESET_STATE = 'user/RESET_STATE',
  FINISH_RENDERING = 'user/FINISH_RENDERING',
}

export interface AuthenticationAction {
  type: ActionTypes.AUTHENTICATION;
}

export interface AuthenticationSuccessAction {
  type: ActionTypes.AUTHENTICATION_SUCCESS;
  userToken: string;
  user: UserInterface;
}

export interface AuthenticationErrorAction {
  type: ActionTypes.AUTHENTICATION_ERROR;
  error: string;
}

export interface ResetStateAction {
  type: ActionTypes.RESET_STATE;
}

export interface FinishRenderingAction {
  type: ActionTypes.FINISH_RENDERING;
}

export type Action = AuthenticationAction | AuthenticationSuccessAction | AuthenticationErrorAction | ResetStateAction | FinishRenderingAction;
