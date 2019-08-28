import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTimingItemResolved, EventTimingItem } from './event-timing-item.model';
import { ErrorProcessingService } from '../shared/error-processing.service';
import { LoadingScreenService } from '../shared/loading/loading-screen.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material';


@Component({
    selector: 'app-event-edit',
    templateUrl: 'event-edit.component.html',
    styleUrls: []
})
export class EventEditComponent implements OnInit {
    
    displayedColumns: string[] = ['start', 'duration', 'artist'];
    @ViewChild('table') 
    table: MatTable<EventTimingItem>;
    
    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _errorProcessingService: ErrorProcessingService,
        private _loadingScreenService: LoadingScreenService) { }



    eventTimingItems: EventTimingItem[] = [
        {
            artist: 'Ансамбль«Пограничников»',
            durationHour: 0,
            durationMin: 4,
            durationSec: 45,
            startTime: '10:00'
        },
        {
            artist: 'Валерия',
            durationHour: 0,
            durationMin: 4,
            durationSec: 45,
            startTime: '10:00'

        },
        {
            artist: 'Р.Ибрагимов',
            durationHour: 0,
            durationMin: 2,
            durationSec: 22,
            startTime: '10:00'

        },
        {
            artist: 'А.Макеева',
            durationHour: 0,
            durationMin: 2,
            durationSec: 41,
            startTime: '10:00'
        }
    ];


    ngOnInit(): void {

        //this._loadingScreenService.startLoading();
        this._route.paramMap.subscribe(params => {
            if (params && params.get('id')) {
                let id = +params.get('id');

                // форма создания события
                if (id === 0) {

                }
                else {
                    //форма редактирования

                }
            }
        })

        // получаем экземпляр из resolved data

        //const resolvedData: EventTimingItemResolved = this._route.snapshot.data['resolvedData'];

        // if (!resolvedData || resolvedData.error){
        //     this._errorProcessingService.showSystemError(resolvedData.error);
        //     return;
        // }

        //this._onEventTimingItemReceived(resolvedData.eventTimingItem);



        // console.log(this.route.snapshot.paramMap.get('id'));


        // this.route.paramMap.subscribe(params => {
        //     console.log('param from Observable: ' + params.get('id'));
        // });
    }
    _onEventTimingItemReceived(eventTimingItem: EventTimingItem): any {
        console.log(eventTimingItem);
    }



    openEventList() {
        this._router.navigate(['/events'], {
            queryParams:
            {
                showAll: 'undefinded',
                openedFromCode: true
            }
        });
    }

    dropTable(event: CdkDragDrop<EventTimingItem[]>) {
        console.log(event);
        console.log('this.eventTimingItems BEFORE:');
        console.log(this.eventTimingItems);
        const prevIndex = this.eventTimingItems.findIndex((d) => d === event.item.data);
        moveItemInArray(this.eventTimingItems, prevIndex, event.currentIndex);
        this.table.renderRows();
        console.log();
        console.log('this.eventTimingItems AFTER:');
        console.log(this.eventTimingItems);
      }

}
