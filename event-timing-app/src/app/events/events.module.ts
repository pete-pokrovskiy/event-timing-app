import { NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventListComponent } from './event-list.component';
import { EventEditComponent } from './event-edit.component';
import { EventsService } from './events.service';
import { EventEditResolverService } from './event-edit-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material';
import { AuthGuard } from '../core/auth.guard';

@NgModule({
    declarations: [ EventListComponent, EventEditComponent],
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
            path: 'events/:id/edit',
            component: EventEditComponent,
            canActivate: [AuthGuard]            
        }
    ]), 
    SharedModule, 
    DragDropModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule],
    exports: [],
    providers: [EventsService]
})
export class EventsModule { }


