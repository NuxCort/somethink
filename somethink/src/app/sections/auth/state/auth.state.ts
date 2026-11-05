import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { CredentialsModel } from '@app/sections/auth/auth.models';
import { AuthService } from '@app/sections/auth/services/auth.service';
import { Login, Logout, Register } from '@app/sections/auth/state/auth.actions';

export interface AuthStateModel {
  credentials: CredentialsModel | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string | null;
}

const DEFAULT_AUTH_STATE: AuthStateModel = {
  credentials: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: null,
};

const AUTH_STATE_TOKEN: StateToken<AuthStateModel> = new StateToken<AuthStateModel>('auth');

@State<AuthStateModel>({
  name: AUTH_STATE_TOKEN,
  defaults: DEFAULT_AUTH_STATE,
})
@Injectable()
export class AuthState {
  constructor(private readonly authService: AuthService) {}

  @Action(Login)
  public login(ctx: StateContext<AuthStateModel>, action: Login): ReturnType<AuthService['login']> {
    ctx.patchState({
      credentials: action.credentials,
      isLoading: true,
      error: null,
    });

    return this.authService.login(action.credentials).pipe(
      tap((response) => {
        ctx.patchState({
          isAuthenticated: true,
          token: response.token ?? null,
          isLoading: false,
          error: null,
        });
      }),
      catchError((error: unknown) => {
        ctx.patchState({
          isAuthenticated: false,
          isLoading: false,
          error: this.getErrorMessage(error),
        });
        return throwError(() => error);
      }),
    );
  }

  @Action(Register)
  public register(ctx: StateContext<AuthStateModel>, action: Register): ReturnType<AuthService['register']> {
    ctx.patchState({
      credentials: action.credentials,
      isLoading: true,
      error: null,
    });

    return this.authService.register(action.credentials).pipe(
      tap((response) => {
        ctx.patchState({
          isAuthenticated: true,
          token: response.token ?? null,
          isLoading: false,
          error: null,
        });
      }),
      catchError((error: unknown) => {
        ctx.patchState({
          isAuthenticated: false,
          isLoading: false,
          error: this.getErrorMessage(error),
        });
        return throwError(() => error);
      }),
    );
  }

  @Action(Logout)
  public logout(ctx: StateContext<AuthStateModel>): void {
    ctx.setState(DEFAULT_AUTH_STATE);
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    return 'Не удалось выполнить запрос. Попробуйте ещё раз.';
  }
}
