import { EventInfo } from './event-info.model';

export interface EventTimingItem {
    id?: number;
    startTime?: string;
    durationMin?: number;
    durationSec?: number;
    artist?: string;
    song?: string;
    // sound?: string;
    // content?: string;
    // notes?: string;
}


export interface EventTimingItemResolved {

    event: EventInfo;
    error?: string;
}


