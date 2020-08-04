import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {Calendar} from 'primeng/calendar';

import { LoadingScreenComponent } from './loading/loading-screen.component';


@NgModule({
    declarations: [LoadingScreenComponent],
    imports: [CommonModule, ToastModule, NgbModule, Calendar ],
    exports: [CommonModule, ToastModule, NgbModule, LoadingScreenComponent, Calendar ],
    providers: [MessageService]
    
})
export class SharedModule{

}
