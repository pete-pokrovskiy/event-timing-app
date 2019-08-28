import { Component } from '@angular/core';
import {Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrentUserService } from '../account/current-user.service';
import { AuthService } from '../account/auth.service';


@Component({
    // tslint:disable-next-line:quotemark
    selector: "app-navbar",
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.scss']
})
export class NavBarComponent {

    constructor(private _router: Router,
        private _location: Location,
        private _route: ActivatedRoute,
        private _currentUserService: CurrentUserService,
        private _authService: AuthService) { }

get isCurrentUserAuthenticated(): boolean{
    return this._currentUserService.isAuthenticated;
}

    public signIn() {
        this._router.navigate(['/account/signin'], {
            queryParams: {
                returnUrl: this._location.path()
            }
        });
    }

    public singOut(){
      this._authService.signOut();
        this._router.navigate(['/account/signin'], {
            queryParams: {
                returnUrl: this._location.path()
            }
        });

    }
} 
