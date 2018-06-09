import { Action } from 'redux';
import { ActionsObservable, combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import { of } from 'rxjs/observable/of';import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { IAuth } from '../../common';
import { AuthActions, AuthConnect } from './auth.actions';
import { AuthService } from './auth.service';
import { reduxEffect } from '../lib';

const authService = new AuthService();

const connect$ = reduxEffect<AuthConnect>(
  AuthActions.connect,
  authService.login,
  { withParams: true }
);

const loginFromCookies$ = reduxEffect(
  AuthActions.loginFromCookies,
  authService.getTokenCookie
)

export const authEffects = combineEpics(connect$, loginFromCookies$);
