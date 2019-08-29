import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class CurrentUserService {

    public currentUser: User = null;

    constructor() { }

    get isAuthenticated(): boolean{
        return this.currentUser != null;
    }
}
