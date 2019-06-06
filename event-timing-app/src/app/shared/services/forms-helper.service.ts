import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormsHelperService {

    constructor() { }

        // валидируем форму
        validateAllFormFields(formGroup: FormGroup) {
            formGroup.markAsTouched({ onlySelf: true });
            formGroup.updateValueAndValidity();

            // проходимся по всем элементам формы
            Object.keys(formGroup.controls).forEach(field => {
                const control = formGroup.get(field);
                // если элемент - контрол/поле, то делаем его touched
                if (control instanceof FormControl) {
                    control.markAsTouched({ onlySelf: true });
                    control.markAsDirty({ onlySelf: true });
                    control.updateValueAndValidity();
    
                }
                // если это какая-то вложенная FormGroup-a - вложенная форма и т д, то рекурсивно вызываем ту же функцию
                // tslint:disable-next-line:one-line
                else if (control instanceof FormGroup) {
                    this.validateAllFormFields(control);
                }
            });
        }
}
