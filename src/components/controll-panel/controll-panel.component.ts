import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDashboardConfig } from 'mm-dashboard';

@Component({
  selector: 'mm-controll-panel',
  // templateUrl: './controll-panel.component.html',
  // styleUrls: ['./controll-panel.component.css',
  //   '../dashboard-manager.component.css']
  template:
  `
    <mm-config-form-panel class="mm-config-panel mm-col mm-chart-setup-panel-col" [config]="config" [activeChartId]="activeChartId" (configChange)="handleConfigChange($event)"></mm-config-form-panel>
    <mm-column-list-panel class="mm-column-panel mm-col mm-columns-col" [columns]="columns"></mm-column-list-panel>
  `,
  styles: [
    `
    .mm-config-panel {
      width: 70%;
    }

    .mm-column-panel {
      width: 30%;
    }
    `
  ]
})
export class ControllPanelComponent implements OnInit {

  @Input() config: IDashboardConfig;
  @Input() activeChartId: number;
  @Input() columns: Set<string>;
  @Output() configChange: EventEmitter<IDashboardConfig> = new EventEmitter<IDashboardConfig>();

  nonInputProp: any;

  constructor() { }

  ngOnInit() {

  }

  handleConfigChange(newConfig) {
    this.configChange.emit(newConfig);
  }
}
