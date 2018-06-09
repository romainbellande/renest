// tslint:disable:max-classes-per-file
import { Action } from 'redux';

import { IAuth, ICredentials } from '../../common';
import { EntityTypeGen, TypeStatus } from '../lib/entity';
import { ReduxActions } from '../lib';
import { IAuthState } from './auth.state';

const typeGen = new EntityTypeGen('auth');
const actions = new ReduxActions('auth');

export class AuthActions {
  public static connect = actions.setAction('connect')
  static loginFromCookies = actions.setAction('login from cookies');
}

export class AuthConnect implements Action {
  public readonly type = AuthActions.connect.default();
  constructor(public payload: ICredentials) {}
}

export class AuthConnectFailed implements Action {
  public readonly type = AuthActions.connect.failed();
  constructor(public payload: any) {}
}

export class AuthConnectSuccess implements Action {
  public readonly type = AuthActions.connect.success();
  constructor(public payload: IAuth) {}
}

export class AuthloginFromCookiesAction implements Action {
  public readonly type = AuthActions.loginFromCookies.default();
  constructor(public payload: ICredentials) {}
}

export class AuthloginFromCookiesFailedAction implements Action {
  public readonly type = AuthActions.loginFromCookies.failed();
  constructor(public payload: any) {}
}

export class AuthloginFromCookiesSuccessAction implements Action {
  public readonly type = AuthActions.loginFromCookies.failed();
  constructor(public payload: any) {}
}

export type AuthAction =
   AuthConnectFailed
 | AuthConnectSuccess
 | AuthloginFromCookiesFailedAction
 | AuthloginFromCookiesSuccessAction;
