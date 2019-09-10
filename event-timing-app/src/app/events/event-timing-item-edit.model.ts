import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time-struct';

export interface EventTimingEditItem{
    duration?: NgbTimeStruct;
    artist?: string;
    song?: string;
}