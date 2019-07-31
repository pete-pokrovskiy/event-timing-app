import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EventsService } from './events.service';
import { EventInfo } from './event-info.model';

@Component({
    selector: 'app-event-list',
    templateUrl: 'event-list.component.html',
    styleUrls: []
})
export class EventListComponent implements OnInit {

    events: EventInfo[] = [
        {
            id: '1',
            name: 'День социального работника 2019',
            // tslint:disable-next-line:max-line-length
            description: 'День социального работника» — профессиональный праздник работников сферы социальной защиты населения,который отмечается в Российской Федерации ежегодно, 8 июня',
            startDateAndTime: new Date('07.06.2019'),
            timingItem: []
        },
        {
            id: '2',
            name: 'День города 2019',
            // tslint:disable-next-line:max-line-length
            description: 'В 2019 году москвичи будут отмечать 872-летие столицы. Дата проведения запланирована на 7 и 8 сентября. Все основные торжества пройдут в первую субботу осени, 7-го числа. Однако одним днем все не ограничится, и в воскресенье народные гулянья продолжатся.',
            startDateAndTime:  new Date('01.09.2019'),
            timingItem: []
        },
        {
            id: '3',
            name: 'Концерт в честь празднования Дня Победы 2019',
            // tslint:disable-next-line:max-line-length
            description: '9 мaя 2019 гoдa в Mocквe пpoйдyт oбщeгopoдcкиe, oкpyжныe и paйoнныe пpaздничныe мepoпpиятия, пocвящeнныe 74-й гoдoвщинe Пoбeды в Beликoй Oтeчecтвeннoй вoйнe.',
            startDateAndTime: new Date('09.05.2019'),
            timingItem: []
        },
    ];

    constructor(private _route: ActivatedRoute, private _titleService: Title,
        private _eventsService: EventsService) {

    }

    ngOnInit() {
        console.log(this._route.snapshot.queryParamMap.get('showAll'));

        this._titleService.setTitle(this._route.snapshot.data['title']);

        // this._eventsService.getEventTimingItems().subscribe(data => console.log(data));
        // this._eventsService.getEventTimingItem(1).subscribe(data => console.log(data));

    }
}
