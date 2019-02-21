import { NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { EventListComponent } from './event-list.component';
import { EventEditComponent } from './event-edit.component';
import { EventDetailsComponent } from './event-details.component';
import { EventsService } from './events.service';
import { EventEditResolverService } from './event-edit-resolver.service';
import { SharedModule } from '../shared/shared.module';

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
        {
            path: 'events/:id/edit',
            component: EventEditComponent,
            resolve: { resolvedData: EventEditResolverService} 
        }
    ]), SharedModule
],
    exports: [],
    providers: [EventsService]
})
export class EventsModule { }


