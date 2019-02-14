import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-event-list',
    templateUrl: 'event-list.component.html',
    styleUrls: []
})
export class EventListComponent implements OnInit {

    constructor(private route: ActivatedRoute, private titleService: Title) {

    }

    ngOnInit() {
        console.log(this.route.snapshot.queryParamMap.get('showAll'));

        this.titleService.setTitle(this.route.snapshot.data['title']);

    }
}
