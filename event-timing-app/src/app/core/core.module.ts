import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';


@NgModule({
declarations: [ NavBarComponent, PageNotFoundComponent, LoginComponent],
imports: [RouterModule, FormsModule, ReactiveFormsModule,
    SharedModule],
exports: [ NavBarComponent, PageNotFoundComponent],
providers: []
})
export class CoreModule {

}
