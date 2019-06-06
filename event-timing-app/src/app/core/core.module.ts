import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import {Location,  LocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
declarations: [ NavBarComponent, PageNotFoundComponent],
imports: [RouterModule, FormsModule, ReactiveFormsModule,
    SharedModule],
exports: [ NavBarComponent, PageNotFoundComponent],
providers: [
    Location, { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class CoreModule {

}
