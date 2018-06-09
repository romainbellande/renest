// tslint:disable-next-line:no-submodule-imports
import { Action } from 'redux';
import { ActionsObservable, combineEpics, createEpicMiddleware, ofType } from 'redux-observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { reduxEffect } from '../lib';
import { UserAction, UserActions, UserRegister } from './user.actions';
import { UserService } from './user.service';

const userService = new UserService();

const register$ = reduxEffect<UserRegister>(
  UserActions.register,
  userService.create,
  { withParams: true }
);

export const userEffects = combineEpics(register$);
