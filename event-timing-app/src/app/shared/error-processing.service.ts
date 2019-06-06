import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
    providedIn: 'root'
})
export class ErrorProcessingService{

    constructor(private _messageService: MessageService){ }

    showSystemError(error: string, logToConsole: boolean = true): void{
        if (logToConsole) {
            console.log(error);
        }
            
        this._messageService.add({severity: 'error', summary: 'Произошла ошибка!',
         detail: 'Подробности в консоли', life: 5000, closable: true});
    }

    showBusinessError(summary: string, detail: string): void{
        this._messageService.add({severity: 'error', summary: summary,
         detail: detail, life: 5000, closable: true});
    }
}
