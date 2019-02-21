import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';


@NgModule({
    declarations: [],
    imports: [ ToastModule ],
    exports: [ ToastModule ],
    providers: [MessageService]
    
})
export class SharedModule{

}
