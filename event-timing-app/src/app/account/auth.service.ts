import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../shared/services/base-http.service';
import { Constants } from '../shared/constants';
import { map, catchError } from 'rxjs/operators';
import { AuthData } from './auth-data.model';

export const AuthTokenLSKey = 'AUTH_TOKEN';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseHttpService {
    signIn(login: string, password: string) {
        return this._httpClient.post<AuthData>(`${Constants.apiRootUri}/account/signin`, { login: login, password: password })
            .pipe(map(result => {
                if (result && result.token) {
                    localStorage.setItem(AuthTokenLSKey, result.token);
                    return true;
                }else {
                    return false;
                }
            })).pipe(catchError(e => this.handleError(e)));
    }
}
