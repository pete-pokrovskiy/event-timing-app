import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EventTimingItem } from './event-timing-item.model';

@Injectable()
export class EventsService {
    constructor(private _httpClient: HttpClient) {

    }

    private _serverUrl = 'http://localhost:8080/api/';

    public getEventTimingItems(): Observable<EventTimingItem[]> {
        return this._httpClient.get<EventTimingItem[]>(this._serverUrl + 'events');
    }

    public getEventTimingItem(id: number): Observable<EventTimingItem>{
        return this._httpClient.get<EventTimingItem>(`${this._serverUrl}events/${id}`);
    }
}
