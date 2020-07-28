import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { EventTimingItem, EventTimingItemResolved } from './event-timing-item.model';
import { EventsDataService } from './events-data.service';
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class EventEditResolverService implements Resolve<EventTimingItemResolved>{

    constructor(private eventsDataService: EventsDataService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<EventTimingItemResolved> {
        // достанем параметр из ссылки
        const id = route.paramMap.get('id');

        return this.eventsDataService.getEvent(id)
        .pipe(
            map(e => ({ event: e })),
            catchError(error => {
                console.log(error);
                const message = `Произошла ошибка: ${JSON.stringify(error)}`;
                return of({ event: null, error: message, toCreate: false });
            }));
    }
}
