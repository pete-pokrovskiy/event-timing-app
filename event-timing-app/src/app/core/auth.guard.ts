import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CurrentUserService } from '../account/current-user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _router: Router, private _currentUserService: CurrentUserService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._currentUserService.currentUser) {
            return true;
        }

        this._router.navigate(['/account/signin'], { queryParams: {
            returnUrl: state.url
        } });
        return false;
    }
}
