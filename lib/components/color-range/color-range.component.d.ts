import { OnInit, EventEmitter } from '@angular/core';
export declare class ColorRangeComponent implements OnInit {
    colors: any;
    colorEmitor: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    onSelectColor(color: any): void;
}
