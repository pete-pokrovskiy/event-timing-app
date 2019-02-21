import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTimingItemResolved, EventTimingItem } from './event-timing-item.model';
import { ErrorProcessingService } from '../shared/error-processing.service';


@Component({
    selector: 'app-event-edit',
    templateUrl: 'event-edit.component.html',
    styleUrls: []
})
export class EventEditComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _router: Router,
        private _errorProcessingService: ErrorProcessingService) { }

    ngOnInit(): void {

        // получаем экземпляр из resolved data
        
        const resolvedData: EventTimingItemResolved = this._route.snapshot.data['resolvedData'];

        if (!resolvedData || resolvedData.error){
            this._errorProcessingService.logError(resolvedData.error);
            return;
        }

        this._onEventTimingItemReceived(resolvedData.eventTimingItem);
        


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

}
