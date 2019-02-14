import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';
import { HomeModule } from './home/home.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EventDataService } from './events/event-data.service';
import { HttpClientModule } from '@angular/common/http';

// создание модуля через angular cli
// ng generate component events\event-details -d --spec false --module events --flat true --selector event-details
// без dry run - убрать флаг -d

// создание сервиса 
// ng generate service events\event-data --spec false

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // модули ангуляра
    HttpClientModule,

    // модули приложения
    CoreModule,
    EventsModule,
    HomeModule,
    AppRoutingModule,
    // сторонние модули
    BrowserModule,
    // подключаем временное in-memory хранилище для Api 
    InMemoryWebApiModule.forRoot(EventDataService, { delay: 1000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
