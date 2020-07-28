import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable({
    providedIn: 'root'
})
export class ToastMessagesService{

    constructor(private _messageService: MessageService){ }

    showSuccessMessage(message: string): void{            
        this._messageService.add({severity: 'success', summary: message, life: 5000, closable: true});
    }
}
