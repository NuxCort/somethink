import { CredentialsModel } from '@app/sections/auth/auth.models';

export class Login {
  public static readonly type: string = '[Auth] Login';
  constructor(public readonly credentials: CredentialsModel) {}
}

export class Register {
  public static readonly type: string = '[Auth] Register';
  constructor(public readonly credentials: CredentialsModel) {}
}

export class Logout {
  public static readonly type: string = '[Auth] Logout';
}
