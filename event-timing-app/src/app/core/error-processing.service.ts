import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorProcessingService{
    logError(error: string): void{
        console.log(error);
    }
}
