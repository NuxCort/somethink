import { inject, Service } from '@angular/core';
import { CredentialsModel } from '@app/sections/auth/auth.models';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '@app/sections/auth/auth.constants';

@Service()
export class AuthService {
  private readonly http = inject(HttpClient);

  public login(credentials: CredentialsModel): void {
    this.http.post(API_ENDPOINTS.LOGIN, credentials);
  }
}
