import { EventTimingItem } from './event-timing-item.model';

export interface EventInfo {
    id: string;
    name: string;
    startDateAndTime: Date;
    timingItem: EventTimingItem[];
}