import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTimingItemResolved, EventTimingItem } from './event-timing-item.model';
import { ErrorProcessingService } from '../shared/error-processing.service';
import { LoadingScreenService } from '../shared/loading/loading-screen.service';


@Component({
    selector: 'app-event-edit',
    templateUrl: 'event-edit.component.html',
    styleUrls: []
})
export class EventEditComponent implements OnInit {
    constructor(private _route: ActivatedRoute, 
                private _router: Router,
                private _errorProcessingService: ErrorProcessingService,
                private _loadingScreenService: LoadingScreenService) { }

    ngOnInit(): void {

        this._loadingScreenService.startLoading();
        this._route.paramMap.subscribe(params => {
            if (params && params.get('id')) {
                let id = +params.get('id');

                // форма создания события
                if (id === 0) {

                }
                else{
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

}
