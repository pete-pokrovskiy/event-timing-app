import { NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { EventListComponent } from './event-list.component';
import { EventEditComponent } from './event-edit.component';
import { EventDetailsComponent } from './event-details.component';

@NgModule({
    declarations: [ EventListComponent, EventDetailsComponent, EventEditComponent],
    imports: [
        RouterModule.forChild([
        {   path: 'events',
            component: EventListComponent,
            data:
            {
                title: 'Список событий'
            }
        }
        ,
        {
            path: 'events/:id',
            component: EventDetailsComponent,
            data:
            {
                title: 'Просмотр события'
            }
         },
        {path: 'events/:id/edit', component: EventEditComponent}
    ])
],
    exports: [],
    providers: []
})
export class EventsModule { }


