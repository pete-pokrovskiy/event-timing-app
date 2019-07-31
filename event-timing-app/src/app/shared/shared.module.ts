import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoadingScreenComponent } from './loading/loading-screen.component';


@NgModule({
    declarations: [LoadingScreenComponent],
    imports: [CommonModule, ToastModule ],
    exports: [CommonModule, ToastModule, LoadingScreenComponent ],
    providers: [MessageService]
    
})
export class SharedModule{

}
