import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';
import { HomeModule } from './home/home.module';

//создание модуля через angular cli
//ng generate component events\event-details -d --spec false --module events --flat true --selector event-details
//без dry run - убрать флаг -d

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // модули приложения
    CoreModule,
    EventsModule,
    HomeModule,
    AppRoutingModule,
    // сторонние модули
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
