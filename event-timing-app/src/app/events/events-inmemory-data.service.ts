import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EventInfo } from './event-info.model';

@Injectable({
  providedIn: 'root'
})
export class EventsInMemoryDataService implements InMemoryDbService {

  // https://www.techiediaries.com/angular-inmemory-web-api/
  createDb() {

    // tslint:disable-next-line:prefer-const
    let events: EventInfo[] = [];
    //   {id: '1', name: 'Концерта 9 мая 2017 года', startDateAndTime: new Date(2018, 4, 10, 18, 0, 0),
    // timingItem: [
    //   {
    //     id: 1,
    //     //durationHour: 0,
    //     durationMin: 5,
    //     durationSec: 50,
    //     //action: 'Выход/уход - правая кулиса',
    //     artist: 'Валерия',
    //     //content: 'Фото - летчики позитивные у военного самолета',
    //     //sound: 'Шум боя',
    //     startTime: '10:00'
    //   }
    // ] }
    // ]; 

    return { events};
  }
}
