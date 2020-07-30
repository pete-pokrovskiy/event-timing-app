import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterViewChecked
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDragHandle
} from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';

import {
  EventTimingItemResolved,
  EventTimingItem
} from './event-timing-item.model';
import { ErrorProcessingService } from '../shared/error-processing.service';
import { LoadingScreenService } from '../shared/loading/loading-screen.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsHelperService } from '../shared/services/forms-helper.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EventTimingItemEditComponent } from './event-timing-item-edit.component';
import { EventTimingEditItem } from './event-timing-item-edit.model';
import { EventsDataService } from './events-data.service';
import { ToastMessagesService } from '../shared/toast-messages.service';
import { EventInfo } from './event-info.model';

@Component({
  selector: 'app-event-edit',
  templateUrl: 'event-edit.component.html',
  styleUrls: []
})
export class EventEditComponent implements OnInit, AfterViewChecked {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _errorProcessingService: ErrorProcessingService,
    private _loadingScreenService: LoadingScreenService,
    private _formsHelperService: FormsHelperService,
    private _cd: ChangeDetectorRef,
    private _modalService: NgbModal,
    private _modalConfig: NgbModalConfig,
    private _eventsDataService: EventsDataService,
    private _toastMessagesService: ToastMessagesService
  ) {
        // параметры для открытия модального окна
        this._modalConfig.backdrop = 'static';
        this._modalConfig.keyboard = false;

   }

  displayedColumns: string[] = ['id', 'start', 'duration', 'artist', 'song'];


  @ViewChild('table')
  table: MatTable<EventTimingItem>;

  title: string;

  eventBasePropertiesForm: FormGroup;

  name: FormControl;
  description: FormControl;
  date: FormControl;
  startTime: FormControl;

  eventTimingItems: EventTimingItem[] = [];
  // = [
  //   {
  //     id: 1,
  //     artist: 'Ансамбль«Пограничников»',
  //     durationHour: 0,
  //     durationMin: 4,
  //     durationSec: 45,
  //     startTime: '10:00'
  //   },
  //   {
  //     id: 2,
  //     artist: 'Валерия',
  //     durationHour: 0,
  //     durationMin: 4,
  //     durationSec: 45,
  //     startTime: '10:00'
  //   },
  //   {
  //     id: 3,
  //     artist: 'Р.Ибрагимов',
  //     durationHour: 0,
  //     durationMin: 2,
  //     durationSec: 22,
  //     startTime: '10:00'
  //   },
  //   {
  //     id: 4,
  //     artist: 'А.Макеева',
  //     durationHour: 0,
  //     durationMin: 2,
  //     durationSec: 41,
  //     startTime: '10:00'
  //   }
  // ];
  
  
  ngAfterViewChecked(): void {
    this._cd.detectChanges();
  }

  ngOnInit(): void {
    this.name = new FormControl('', [Validators.required]);
    this.description = new FormControl('');
    this.date = new FormControl(null, [Validators.required]);
    this.startTime = new FormControl(null, [Validators.required]);

    this.eventBasePropertiesForm = new FormGroup({
      name: this.name,
      description: this.description,
      date: this.date,
      startTime: this.startTime
    });

    this._route.paramMap.subscribe(params => {
      if (params && params.get('id')) {
        const id = params.get('id');

        // форма создания события
        if (id === "0") {
          this.title = 'Создание события';
        } else {
          // форма редактирования
          this.title = 'Редактирование события';

          this._loadingScreenService.startLoading();
          this._eventsDataService.getEvent(id).subscribe((result: EventInfo) => {

            this.eventBasePropertiesForm.setValue({
              name: result.Name,
              description : result.Description,
              date: result.StartDateAndTime,
              startTime: { hour: 10, minute: 0}

            })

            this._loadingScreenService.stopLoading();
          });

        }
      }
    });

    // получаем экземпляр из resolved data

    // const resolvedData: EventTimingItemResolved = this._route.snapshot.data['resolvedData'];

    // if (!resolvedData || resolvedData.error){
    //     this._errorProcessingService.showSystemError(resolvedData.error);
    //     return;
    // }

    // this._onEventTimingItemReceived(resolvedData.eventTimingItem);

    // console.log(this.route.snapshot.paramMap.get('id'));

    // this.route.paramMap.subscribe(params => {
    //     console.log('param from Observable: ' + params.get('id'));
    // });
  }

  _onEventTimingItemReceived(eventTimingItem: EventTimingItem): any {
    console.log(eventTimingItem);
  }

  save() {
    this._formsHelperService.validateAllFormFields(
      this.eventBasePropertiesForm
    );

    if (!this.eventBasePropertiesForm.valid) {
      console.log('its invalid');
      return;
    }
    console.log('creating event!');
    console.log(this.eventBasePropertiesForm.value);

this._eventsDataService.createEvent({
  Name: this.name.value,
  Description: this.description.value,
  StartDateAndTime: new Date(this.date.value.year, this.date.value.month, this.date.value.day, this.startTime.value.hour,
    this.startTime.value.minute)
}).subscribe(result => {

  this._toastMessagesService.showSuccessMessage("Событие создано!");
  
  this._router.navigate(['events', result.id, 'edit']);

  console.log(result);
});

  }

  openEventList() {
    this._router.navigate(['/events'], {
      queryParams: {
        showAll: 'undefinded',
        openedFromCode: true
      }
    });
  }

  dropTable(event: CdkDragDrop<EventTimingItem[]>) {
    console.log(event);
    console.log('this.eventTimingItems BEFORE:');
    console.log(this.eventTimingItems);
    const prevIndex = this.eventTimingItems.findIndex(
      d => d === event.item.data
    );
    moveItemInArray(this.eventTimingItems, prevIndex, event.currentIndex);
    this.table.renderRows();
    console.log();
    console.log('this.eventTimingItems AFTER:');
    console.log(this.eventTimingItems);
  }

  createEventTiming(){
    const modalRef = this._modalService.open(EventTimingItemEditComponent);
    modalRef.result.then((result: EventTimingEditItem) => {           
        if (result){
          this._addNewTiming(result);
        }
    });

  }
  _addNewTiming(result: EventTimingEditItem) {

    // выставим соответствующее время начала
    // берем время начала последней записи в списке суммируем его с длительностью последней записи и п

    this.eventTimingItems.push({
      durationMin: result.duration.minute,
      durationSec: result.duration.second,
      artist: result.artist,
      song: result.song
    });
  }
}
