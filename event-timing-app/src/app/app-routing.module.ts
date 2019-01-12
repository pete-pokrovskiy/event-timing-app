import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list.component';
import { HomePageComponent } from './home/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'list', component: EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
