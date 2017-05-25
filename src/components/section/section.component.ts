import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mm-section',
    template:
    `
        <section class="mm-section flex-col">
            <h4 (click)="clickHeader()"><span>{{title}}</span></h4>
            <ng-content class="flex-item scroll-y"></ng-content>
        </section>
    `,
    styles: [
        `
        .mm-section {
            padding-left: 5px;
            padding-right: 5px;
        }

        .mm-section h4 {
            margin-left: -5px;
            margin-right: -5px;
            margin-top: 0px;
            margin-bottom: 5px;
            background-color: #bf360c;
            color: #ffffff;
            cursor: pointer;
        }

        .mm-section h4 span {
            padding-left: 5px;
            padding-right: 5px;
        }
        `
    ]
})
export class SectionComponent {
    @Input() title: string;
    @Output() onHeaderClick: EventEmitter<any> = new EventEmitter();

    constructor() {

    }

    clickHeader() {
        this.onHeaderClick.emit();
    }
}