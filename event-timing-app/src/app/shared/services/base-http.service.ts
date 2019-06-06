import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export abstract class BaseHttpService {

    constructor(protected _httpClient: HttpClient) { }

    // protected handleError(error: Response | any): Observable<any> {
    //     console.log(error);
    //     return throwError(error);
    // }

    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('Client-side or network error occurred: ', error.error.message);
          console.error('Full error data: ');
          console.error(error);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
            console.error('Full error data: ');
            console.error(error);
        }
        return throwError(
          'Произошла ошибка. Пожалуйста, обратитесь на поддержку');
      }

}
