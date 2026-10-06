import { DestroyRef } from '@angular/core';
import { CredentialsModel } from '@app/sections/auth/auth.models';

export class Login {
  public static readonly type: string = '[AuthActions] Login';
  constructor(
    readonly credentials: CredentialsModel,
    readonly destroyRef: DestroyRef,
  ) {}
}
