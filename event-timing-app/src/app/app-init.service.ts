import { Injectable } from '@angular/core';
import { AuthService } from './account/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AppInitService {

    constructor(private _authService: AuthService) { }
    init(){
        return this._authService.authenticateCurrentUser();
    }
}
