import { EventTimingItem } from './event-timing-item.model';

export interface EventInfo {
    Id?: string;
    Name: string;
    Description: string;
    StartDateAndTime: Date;
    CreatedDate?: Date;
    ModifiedDate?: Date;
    TimingItem?: EventTimingItem[];
}


export interface CreateEventResult{
    id: string;
}