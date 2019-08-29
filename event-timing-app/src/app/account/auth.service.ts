import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../shared/services/base-http.service';
import { Constants } from '../shared/constants';
import { map, catchError, retry } from 'rxjs/operators';
import { AuthData } from './auth-data.model';
import { CurrentUserService } from './current-user.service';
import { User } from './user.model';
import { ErrorProcessingService } from '../shared/error-processing.service';

export const AuthTokenLSKey = 'AUTH_TOKEN';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseHttpService {

    // TODO: есть подозрение, что нужно разделять сервис, который работает с httpclient-ом и без
    constructor(
        private _currentUserService: CurrentUserService,
        private _errorProcessingService: ErrorProcessingService,
         _httpClient: HttpClient){
        super(_httpClient);
    }

    authenticateCurrentUser() {
        const token = localStorage.getItem(AuthTokenLSKey);
        if (token) {
            return this._httpClient.get<User>(`${Constants.apiRootUri}/account/auth`).toPromise().then(user => {

                if (user === undefined || user === null) {
                    this._errorProcessingService.showBusinessError('Ошибка аутентификации', 'Пользователь не найден!');
                    return;
                }

                this._currentUserService.currentUser = user;

            });
        }
        else {
            return new Promise<void>((resolve, reject) => {
                console.log("no token!!");
                resolve();
            });
        }
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

    getJwtToken() {
        return localStorage.getItem(AuthTokenLSKey);
    }
}
