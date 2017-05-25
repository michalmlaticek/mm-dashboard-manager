import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'mm-context-menu',
    template:
    `
    <div class="mm-context-menu" [style.top]="contextEvent.clientY + 'px'" [style.left]="contextEvent.clientX + 'px'">
        <ul>
            <ng-content></ng-content>
        </ul>
    </div>
    `,
    styles: [
        `
        .mm-context-menu {
            display: block;
            position: absolute;
            z-index: 4000;
            background: rgba(109,73,46,50);
        }

        .mm-context-menu ul {
            list-style-type: none;
            margin: 0px 0px;
            padding: 5px 5px;
        }
        
        `
    ]
})
export class ContextMenuComponent implements OnChanges {
    @Input() contextEvent: MouseEvent;

    ngOnChanges(change: SimpleChanges) {
        console.log("ContextMenuComponent -> ngOnChanges: ", change);
    }

}