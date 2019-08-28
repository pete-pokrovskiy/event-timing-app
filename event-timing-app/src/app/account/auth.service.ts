import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../shared/services/base-http.service';
import { Constants } from '../shared/constants';
import { map, catchError, retry } from 'rxjs/operators';
import { AuthData } from './auth-data.model';
import { CurrentUserService } from './current-user.service';

export const AuthTokenLSKey = 'AUTH_TOKEN';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseHttpService {

    // TODO: есть подозрение, что нужно разделять сервис, который работает с httpclient-ом и без
    constructor(private _currentUserService: CurrentUserService, _httpClient: HttpClient){
        super(_httpClient);
    }

    signIn(login: string, password: string) {
        return this._httpClient.post<AuthData>(`${Constants.apiRootUri}/account/signin`, { login: login, password: password })
            .pipe(
                // retry(3),
                map(result => {
                if (result && result.token && result.user) {
                    localStorage.setItem(AuthTokenLSKey, result.token);
                    this._currentUserService.currentUser = result.user; 
                    
                    return true;
                }else {
                    return false;
                }
            })).pipe(catchError(e => this.handleError(e)));
    }
    
    
    signOut(){
        localStorage.removeItem(AuthTokenLSKey);
        this._currentUserService.currentUser = null;
    }
}
