import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';


@NgModule({
    declarations: [],
    imports: [CommonModule, ToastModule ],
    exports: [CommonModule, ToastModule ],
    providers: [MessageService]
    
})
export class SharedModule{

}
