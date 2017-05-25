import {
    Component,
    Input,
    ViewEncapsulation,
    OnInit,
    AfterViewInit,
    Output,
    EventEmitter,
    ViewChildren,
    ElementRef,
    QueryList,
    Renderer,
    ViewChild
} from '@angular/core';
import { IColumn } from 'mm-dashboard-core';
import { IDashboardConfig } from 'mm-dashboard';

@Component({
    selector: 'mm-dashboard-manager',
    // templateUrl: './dashboard-manager.component.html',
    // styleUrls: ['./dashboard-manager.component.css'],
    template:
    `
    <div class="mm-dashboard-manager flex-row height-full" (click)="onManagerClick($event)">
      <div class="mm-dm-full-dashboard scroll-y">
        <mm-dashboard [config]="config" [(data)]="data" (selectedItem)="onWidgetSelected($event)" (rightClick)="onWidgetRightClick($event)"></mm-dashboard>
      </div>
      <div class="mm-dm-controll height-full">
        <mm-controll-panel class="flex-row height-full" [config]="config" [columns]="columns" 
        [activeChartId]="activeChartId" (configChange)="onConfigChange($event)"></mm-controll-panel>
      </div>
      <mm-context-menu *ngIf="contextEvent" [contextEvent]="contextEvent">
        <li (click)="removeWidget()">Remove widget</li>
      </mm-context-menu>
    </div>
  `,
    styles: [
        `
      .mm-dashboard-manager {
          position: relative;
          height: 100%;
      }

      .block {
          display: block;
      }

      .flex-row {
          display: flex;
      }

      .flex-col {
          display: flex;
          flex-flow: column;
          max-height: 100%;
      }

      .flex-item {
          flex: 1 1 auto;
      }

      .flex-item-2 {
          flex: 2 1 auto;
      }

      .scroll-y {
          overflow-x: hidden;
          overflow-y: auto;
      }

      .mm-dm-full-dashboard {
          width: 70%;
      }

      .mm-dm-controll {
          width: 30%;
          border-left: 1px dashed #bf360c;
      }

      .height-full {
          height: 100%;
      }

      .mm-col {
          padding-left: 5px;
          padding-right: 5px;
      }

      .mm-col h4 {
          margin-left: -5px;
          margin-right: -5px;
          margin-top: 0px;
          margin-bottom: 5px;
          background-color: #bf360c;
          color: #ffffff;
      }

      .mm-col h4 span {
          padding-left: 5px;
          padding-right: 5px;
      }

      .mm-chart-setup-panel-col {
          /*background-color: #424242;*/
      }

      .mm-columns-col {
          border-left: 1px dashed #bf360c;
          /*background-color: #757575;*/
      }
    `
    ],
    encapsulation: ViewEncapsulation.None,
})
export class DashboardManagerComponent {
    @Input() config: IDashboardConfig;
    @Input() data: Array<any>;
    @Input() columns: Set<IColumn>;
    @Output() configChange: EventEmitter<IDashboardConfig> = new EventEmitter<IDashboardConfig>();

    private activeChartId: number = -1;
    private contextEvent: Event;

    constructor(private renderer: Renderer,
        private elem: ElementRef) {

    }

    private onWidgetSelected(selectEvent: { event: Event, item: number }) {
        console.log("DashboardManagerComponent -> handleWidgetSelection: ", selectEvent);
        this.activeChartId = selectEvent.item;
        // this.contextEvent = null;
    }

    private onWidgetRightClick(contextEvent: { event: Event, item: number }) {
        console.log("DashboardManagerComponent -> onWidgetRightClick: ", contextEvent.event);
        this.activeChartId = contextEvent.item;
        contextEvent.event.preventDefault();
        this.contextEvent = contextEvent.event;
    }

    private onConfigChange(newConfig: IDashboardConfig) {
        console.log("DashboardManagerComponent -> onConfigChange: newConfig: ", newConfig);
        console.log("Is newConfig === config: ", newConfig === this.config);
        this.config = newConfig;
        this.configChange.emit(newConfig);
        this.contextEvent = null;
    }

    private removeWidget() {
        this.config.items.splice(this.activeChartId, 1);
        this.contextEvent = null;
    }

    private onManagerClick(event: Event) {
        this.contextEvent = null;
    }

}
