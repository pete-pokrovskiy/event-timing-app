import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
    providedIn: 'root'
})
export class ErrorProcessingService{

    constructor(private _messageService: MessageService){ }

    logError(error: string): void{
        console.log(error);
        this._messageService.add({severity: 'error', summary: 'Произошла ошибка!',
         detail: 'Подробности в консоли', life: 5000, closable: true});
    }
}
