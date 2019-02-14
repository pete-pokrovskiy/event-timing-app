import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-event-edit',
    templateUrl: 'event-edit.component.html',
    styleUrls: []
})
export class EventEditComponent implements OnInit {
    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('id'));


        this.route.paramMap.subscribe(params => {
            console.log('param from Observable: ' + params.get('id'));
        });
    }
    constructor(private route: ActivatedRoute, private router: Router) { }


    openEventList() {
        this.router.navigate(['/events'], {
            queryParams:
            {
                showAll: 'undefinded',
                openedFromCode: true
            }
        });
    }

}
