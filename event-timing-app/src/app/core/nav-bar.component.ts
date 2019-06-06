import { Component } from '@angular/core';
import {Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    // tslint:disable-next-line:quotemark
    selector: "app-navbar",
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.scss']
})
export class NavBarComponent {

    constructor(private _router: Router,
        private _location: Location,
        private _route: ActivatedRoute) { }

    public loginUser() {
        this._router.navigate(['/account/signin'], {
            queryParams: {
                returnUrl: this._location.path()
            }
        });
    }
} 
