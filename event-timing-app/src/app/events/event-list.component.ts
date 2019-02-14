import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EventsService } from './events.service';

@Component({
    selector: 'app-event-list',
    templateUrl: 'event-list.component.html',
    styleUrls: []
})
export class EventListComponent implements OnInit {

    constructor(private _route: ActivatedRoute, private _titleService: Title,
        private _eventsService: EventsService) {

    }

    ngOnInit() {
        console.log(this._route.snapshot.queryParamMap.get('showAll'));

        this._titleService.setTitle(this._route.snapshot.data['title']);

        this._eventsService.getEvents().subscribe(data => console.log(data));


    }
}
