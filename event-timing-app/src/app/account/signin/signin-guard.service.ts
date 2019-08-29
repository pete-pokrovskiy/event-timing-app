import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class SigninGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _currentUserService: CurrentUserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this._currentUserService.isAuthenticated){
            this._router.navigate(['/']);
            return false;
        }
        return true;
    }
}
