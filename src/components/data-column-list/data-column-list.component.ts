import { Component, OnInit, Input } from '@angular/core';
import { IColumn } from 'mm-dashboard-core';

@Component({
  selector: 'mm-column-list-panel',
  // templateUrl: './columns.component.html',
  // styleUrls: ['./columns.component.css']
  template:
  `
      <section class="mm-column-list-panel">
        <mm-section [title]="'Columns'">
          <ul class="scroll-y">
            <li class="mm-column" *ngFor="let col of columns;let i = index" dnd-draggable [dragEnabled]="true" [dragData]="col">
              <span>{{col.label | truncate : 7}}</span>
            </li>
          </ul>
        </mm-section>
      </section>  
    `,
  styles: [
    `
        .mm-column-list-panel ul {
            padding: 0px;
        }

        .mm-column {
            background-color: #EFEFEF;
            list-style-type: none;
            margin-bottom: 5px;
            width: 100%;
            border-radius: 4px;
            cursor: move;
        }

        .mm-column span {
            padding-left: 10px;
            padding-right: 10px;
        }
      `
  ]
})
export class DataColumnListComponent implements OnInit {

  @Input() columns: Set<IColumn>;

  constructor() { }

  ngOnInit() {

  }

}
