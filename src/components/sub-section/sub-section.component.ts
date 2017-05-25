import { Component, Input } from '@angular/core';

@Component({
    selector: 'mm-sub-section',
    template:
    `
        <section class="mm-sub-section">
            <h5><span>{{title}}</span></h5>
            <ng-content></ng-content>
        </section>
    `,
    styles: [
        `
        .mm-sub-section h3 {
            border-bottom: 1px solid #000;
        }
        `
    ]
})
export class SubSectionComponent {
    @Input() title;
    // private expanded: boolean;

    constructor() {

    }

    // private expandSection() {
    //     this.expanded = !this.expanded;
    // }
}