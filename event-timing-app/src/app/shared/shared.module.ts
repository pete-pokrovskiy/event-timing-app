import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { LoadingScreenComponent } from './loading/loading-screen.component';


@NgModule({
    declarations: [LoadingScreenComponent],
    imports: [CommonModule, ToastModule, NgbModule ],
    exports: [CommonModule, ToastModule, NgbModule, LoadingScreenComponent ],
    providers: [MessageService]
    
})
export class SharedModule{

}
