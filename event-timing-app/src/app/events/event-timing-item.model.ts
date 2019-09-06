export interface EventTimingItem {
    id?: number;
    startTime?: string;
    durationHour?: number;
    durationMin?: number;
    durationSec?: number;
    artist?: string;
    action?: string;
    sound?: string;
    content?: string;
    notes?: string;
}


export interface EventTimingItemResolved {

    eventTimingItem: EventTimingItem;
    error?: string;
}


