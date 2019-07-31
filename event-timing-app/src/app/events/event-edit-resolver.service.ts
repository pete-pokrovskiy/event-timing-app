import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { EventTimingItem, EventTimingItemResolved } from './event-timing-item.model';
import { EventsService } from './events.service';
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class EventEditResolverService implements Resolve<EventTimingItemResolved>{

    constructor(private eventsDataService: EventsService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<EventTimingItemResolved> {

        // достанем параметр из ссылки
        const id = route.paramMap.get('id');

        if (isNaN(+id)) {
            const message = 'Переданный идентификатор не является числом!';
            return of({ eventTimingItem: null, error: message });
        }
        

        return this.eventsDataService.getEventTimingItem(+id).pipe(
            map(e => ({ eventTimingItem: e })),
            catchError(error => {
                console.log(error);
                const message = `Произошла ошибка: ${JSON.stringify(error)}`;
                return of({ eventTimingItem: null, error: message, toCreate: false });
            }));
    }
}
