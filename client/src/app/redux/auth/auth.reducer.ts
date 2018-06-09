import { Reducer } from 'redux';

import { IAuth } from '../../common';
import { AuthAction, AuthActions } from './auth.actions';
import { IAuthState, initialState } from './auth.state';

export const authReducer: Reducer<IAuthState> = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActions.connect.success(): {
      const {expiresIn, token} = action.payload as IAuthState;
      return {...state, token, expiresIn};
    }

    case AuthActions.loginFromCookies.success(): {
      return {
        ...state,
        token: action.payload,
        loginFromCookiesStatus: 'success',
      };
    }

    case AuthActions.loginFromCookies.failed(): {
      return {
        ...state,
        ...action.payload as IAuth,
        loginFromCookiesStatus: 'failed',
      };
    }

    default: {
      return state;
    }
  }
};
