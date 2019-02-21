import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
declarations: [ NavBarComponent, PageNotFoundComponent],
imports: [RouterModule, SharedModule],
exports: [ NavBarComponent, PageNotFoundComponent],
providers: []
})
export class CoreModule {

}
