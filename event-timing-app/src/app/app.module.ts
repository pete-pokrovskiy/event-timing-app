import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EventsModule } from './events/events.module';
import { HomeModule } from './home/home.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EventDataService } from './events/event-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AccountModule } from './account/account.module';
import { AppInitService } from './app-init.service';
import { HttpJwtInterceptor } from './core/http-jwt-interceptor.service';
import { HttpErrorInterceptor } from './core/http-error-interceptor.service';

export function initApp(initService: AppInitService) {
  return () => initService.init();
}

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
    SharedModule,
    CoreModule,
    EventsModule,
    HomeModule,
    AccountModule,
    // !!должен быть последним в списке, чтобы корректно сработал раут PageNotFoundComponent!!
    AppRoutingModule,

    // сторонние модули
    BrowserModule,
    BrowserAnimationsModule
    // подключаем временное in-memory хранилище для Api !!НЕ ЗАБЫВАТЬ ВЫКЛЮЧАТЬ!!
    //, InMemoryWebApiModule.forRoot(EventDataService, { delay: 1000})
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: initApp, deps: [AppInitService], multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
