export interface EventTimingItem {
    durationHour: number;
    durationMin: number;
    durationSec: number;
    artist: string;
    action: string;
    sound: string;
    content: string;
    notes?: string;
}


export interface EventTimingItemResolved {

    eventTimingItem: EventTimingItem;
    error?: string;
}


