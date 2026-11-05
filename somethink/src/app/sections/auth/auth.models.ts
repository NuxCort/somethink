export interface CredentialsModel {
  login: string;
  password: string;
}

export interface AuthResponseModel {
  token?: string | null;
  message?: string | null;
}
