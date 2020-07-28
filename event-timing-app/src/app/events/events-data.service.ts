import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EventTimingItem } from './event-timing-item.model';
import { BaseHttpService } from '../shared/services/base-http.service';
import { Constants } from '../shared/constants';
import { EventInfo, CreateEventResult } from './event-info.model';

@Injectable()
export class EventsDataService extends BaseHttpService {

    public getEvents(): Observable<EventInfo[]> {
        return this._httpClient.get<EventInfo[]>(`${Constants.apiRootUri}/events`);
    }

    public getEvent(id: string): Observable<EventInfo>{
        return this._httpClient.get<EventInfo>(`${Constants.apiRootUri}/events/${id}`);
    }

    public createEvent(event: EventInfo):Observable<CreateEventResult> {
        return this._httpClient.post<CreateEventResult>(`${Constants.apiRootUri}/events`, event, {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        });
    }
}
