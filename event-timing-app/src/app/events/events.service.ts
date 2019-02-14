import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventsService {
    constructor(private _httpClient: HttpClient) {

    }

    private _serverUrl = 'http://localhost:8080/api/';

    public getEvents(): Observable<Event[]> {
        return this._httpClient.get<Event[]>(this._serverUrl + 'events');
    }
}