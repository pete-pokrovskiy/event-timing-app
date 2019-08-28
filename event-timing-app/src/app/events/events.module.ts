import { NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { EventListComponent } from './event-list.component';
import { EventEditComponent } from './event-edit.component';
import { EventDetailsComponent } from './event-details.component';
import { EventsService } from './events.service';
import { EventEditResolverService } from './event-edit-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material';
import { AuthGuard } from '../core/auth.guard';

@NgModule({
    declarations: [ EventListComponent, EventDetailsComponent, EventEditComponent],
    imports: [
        RouterModule.forChild([
        {   path: 'events',
            component: EventListComponent,
            canActivate: [AuthGuard],
            data:
            {
                title: 'Список событий'
            }
        }
        ,
        {
            path: 'events/4',
            component: EventDetailsComponent,
            canActivate: [AuthGuard],
         },
        {
            path: 'events/:id',
            component: EventDetailsComponent,
            canActivate: [AuthGuard],
            data:
            {
                title: 'Просмотр события'
            }
         },
        {
            path: 'events/:id/edit',
            component: EventEditComponent,
            canActivate: [AuthGuard],
            //resolve: { resolvedData: EventEditResolverService} 
        }
    ]), 
    SharedModule, 
    DragDropModule,
    MatTableModule ],
    exports: [],
    providers: [EventsService]
})
export class EventsModule { }


