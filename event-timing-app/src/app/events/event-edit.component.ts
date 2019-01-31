import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: "event-edit",
    templateUrl: "event-edit.component.html",
    styleUrls: []
})
export class EventEditComponent implements OnInit{
    ngOnInit(): void {
        console.log(this.route.snapshot.paramMap.get('id'));
    }
    constructor(private route: ActivatedRoute) { }
}