import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: "app-navbar",
    templateUrl: "nav-bar.component.html",
    styleUrls: ['nav-bar.component.scss']
})
export class NavBarComponent {

    constructor(private router: Router){ }
    public loginUser()
    {
        alert("moving to event list!");

        this.router.navigate(["/events"]);

    }
}
