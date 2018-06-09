// tslint:disable:max-classes-per-file

import { Action } from 'redux';

import { IUser, IUserCreate } from '../../common';
import { ReduxActions } from '../lib';

const actions = new ReduxActions('user');

export class UserActions {
  public static register = actions.setAction('register');
}

export class UserRegister implements Action {
  public readonly type = UserActions.register.default();
  constructor(public payload: IUserCreate) {}
}

export class UserRegisterSuccess implements Action {
  public readonly type = UserActions.register.success();
  constructor(public payload: IUser) {}
}

export class UserRegisterFailed implements Action {
  public readonly type = UserActions.register.failed();
  constructor(public payload: any) {}
}

export type UserAction = UserRegisterFailed
  | UserRegisterSuccess;
