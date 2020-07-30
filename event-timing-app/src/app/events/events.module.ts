import { NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventListComponent } from './event-list.component';
import { EventEditComponent } from './event-edit.component';
import { EventsDataService } from './events-data.service';
import { EventEditResolverService } from './event-edit-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AuthGuard } from '../core/auth.guard';
import { EventTimingItemEditComponent } from './event-timing-item-edit.component';

@NgModule({
    declarations: [ EventListComponent, EventEditComponent, EventTimingItemEditComponent],
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
    MatIconModule,
    FormsModule,
    ReactiveFormsModule],
    exports: [],
    providers: [EventsDataService],
    bootstrap: [EventTimingItemEditComponent]
})
export class EventsModule { }


