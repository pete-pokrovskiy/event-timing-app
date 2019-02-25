import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list.component';
import { HomePageComponent } from './home/home-page.component';
import { PageNotFoundComponent } from './core/page-not-found.component';
import { LoginComponent } from './core/login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: 'login', component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
