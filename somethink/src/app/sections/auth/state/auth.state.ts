import { Action, createPropertySelectors, State, StateContext, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CredentialsModel } from '@app/sections/auth/auth.models';
import { Login } from '@app/sections/auth/state/auth.actions';

export interface AuthStateModel {
  credentials: CredentialsModel;
  isAuthenticated: boolean;
}

const DEFAULT_AUTH_STATE: AuthStateModel = {
  credentials: {
    login: null,
    password: null,
  },
  isAuthenticated: null,
} as const;

const AUTH_STATE_TOKEN: StateToken<AuthStateModel> = new StateToken<AuthStateModel>('auth');

@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: DEFAULT_AUTH_STATE,
})
@Injectable()
export class AuthState {
  public static readonly getSlices = createPropertySelectors<AuthStateModel>(AuthState);

  @Action(Login)
  public Login({ setState }: StateContext<AuthStateModel>, { destroyRef }: Login) {
    
  }
}
