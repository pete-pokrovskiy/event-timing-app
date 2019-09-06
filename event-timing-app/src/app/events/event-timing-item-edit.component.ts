import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventTimingItem } from './event-timing-item.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsHelperService } from '../shared/services/forms-helper.service';

@Component({
    selector: 'app-event-timing-item',
    templateUrl: 'event-timing-item-edit.component.html',
    styleUrls: ['event-timing-item-edit.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class EventTimingItemEditComponent implements OnInit {

    eventTimingItem: EventTimingItem;

    get isNewItem(): boolean{
        return (!this.eventTimingItem || this.eventTimingItem.id === null || this.eventTimingItem.id === undefined);
    }

    constructor(private _activeModal: NgbActiveModal,
        private _formsHelperService: FormsHelperService) { }

    duration: FormControl;
    artist: FormControl;
    song: FormControl;
    // ballet: FormControl;
    // choreography: FormControl;
    // action: FormControl;
    // liveComments: FormControl;
    // back: FormControl;
    // sound: FormControl;
    // content: FormControl;
    // phonogram: FormControl;
    // costumes: FormControl;
    // // реквизит
    // props: FormControl;

    eventTimingItemForm: FormGroup;

    ngOnInit() {

        this.duration = new FormControl(null, [Validators.required]);
        this.artist = new FormControl(null, [Validators.required]);
        this.song = new FormControl(null);

        this.eventTimingItemForm = new FormGroup({
            duration: this.duration,
            artist: this.artist,
            song: this.song
        });


        // if (!this.isNewItem){
        //     this.eventTimingItemForm.patchValue({
        //     });

        // }


     }

    crossClickCloseDialog() {
        this._closeDialog();
    }

    private _closeDialog() {
        this._activeModal.close();
    }

    cancel(){
        this._closeDialog();
    }

    create(){
        this._formsHelperService.validateAllFormFields(
            this.eventTimingItemForm
          );
      
          if (!this.eventTimingItemForm.valid) {
            console.log('its invalid');
            return;
          }
          console.log('creating event!');
          console.log(this.eventTimingItemForm.value);

        console.log('creating new event timing item!');
    }
}
