import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsModel, AuthResponseModel } from '@app/sections/auth/auth.models';
import { API_ENDPOINTS } from '@app/sections/auth/auth.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  public login(credentials: CredentialsModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(API_ENDPOINTS.LOGIN, credentials);
  }

  public register(credentials: CredentialsModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(API_ENDPOINTS.REGISTER, credentials);
  }
}
