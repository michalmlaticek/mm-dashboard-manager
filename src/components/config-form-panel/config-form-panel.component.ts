import {
  Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewContainerRef, ViewChild,
  ComponentRef, ComponentFactoryResolver, Inject
} from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { IDashboardConfig, IBaseDashboardConfig } from 'mm-dashboard';
import { EColType, EAggregation, IBaseWidget, IBaseWidgetConfig } from 'mm-dashboard-core';

import { WidgetConfig, WIDGET_CONFIG_SERVICE } from '../../services';
import { GeneralConfigFormComponent } from '../';

export enum CONFIG_PANEL_SECTION {
  GENERAL_SETTINGS, WIDGET_LIST, WIDGET_SETTINGS, ACTIONS
}

@Component({
  selector: 'mm-config-form-panel',
  template:
  `
  <section class="mm-config-form-panel mm-controll-form flex-col">
    <mm-section [title]="'General Settings'" class="flex-item flex-col" (onHeaderClick)="expandSection(0)">
      <mm-general-config-form *ngIf="activeSection==0" [config]="generalConfig" (configChange)="handleGeneralConfigChange($event)" class="scroll-y"></mm-general-config-form>
    </mm-section>
    <mm-section [title]="'Widget List'" class="flex-item flex-col" (onHeaderClick)="expandSection(1)">
      <mm-widget-list *ngIf="activeSection==1" [widgets]="widgets" (addWidget)="handleAddWidgetConfig($event)"></mm-widget-list>
    </mm-section>
    <mm-section [title]="'Chart Settings'" class="flex-item flex-col" (onHeaderClick)="expandSection(2)">
      <div *ngIf="activeChartId!=-1 && activeSection==2" mm-widget-form [config]="config.items[activeChartId]?.widgetConfig" (configChange)="handleWidgetConfigChange($event)" class="scroll-y"></div>
    </mm-section>
    <mm-section [title]="'Actions'" class="flex-item flex-col" (onHeaderClick)="expandSection(3)">
      <div *ngIf="activeSection==3">
        <button type="submit">Save</button>
      </div>
    </mm-section>
  </section>
  `,
  styles: [
    `
    .mm-chart-config-area {
        height: 70%;
        overflow-y: auto;
    }

    label, input, select {
        display: block;
        width: 100%;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
    }

    .display-none {
        display: none;
    }
    `
  ]
})
export class ConfigFormPanelComponent implements OnInit {

  @Input() config: IDashboardConfig;
  @Input() activeChartId: number;
  @Output() configChange: EventEmitter<IDashboardConfig> = new EventEmitter<IDashboardConfig>();

  activeSection: CONFIG_PANEL_SECTION;

  generalConfig: IBaseDashboardConfig;
  widgets: Array<IBaseWidgetConfig>;

  constructor(
    @Inject(WIDGET_CONFIG_SERVICE) private widgetConfigService: WidgetConfig
  ) {
    this.widgets = this.widgetConfigService.getBaseConfigs();
  }

  ngOnInit() {
    console.log("onInit: 'MmChartSetupPanelComponent'");
    this.generalConfig = <IBaseDashboardConfig>{ title: this.config.title };
  }

  expandSection(section: CONFIG_PANEL_SECTION) {
    if (this.activeSection == section) {
      this.activeSection = null;
    } else {
      this.activeSection = section;
    }
  }

  handleGeneralConfigChange(generalConfig: IBaseDashboardConfig) {
    // console.log("general config changed");
    let newDashboardConfig: IDashboardConfig = <IDashboardConfig>{
      title: generalConfig.title,
      gridConfig: generalConfig.gridConfig,
      items: this.config.items
    };

    console.log("new dashboard config: ", newDashboardConfig);
    this.configChange.emit(newDashboardConfig);
  }

  handleWidgetConfigChange(newConfig) {
    console.log("change: ", newConfig);
    this.config.items[this.activeChartId].widgetConfig = newConfig;
    this.configChange.emit(this.config);
  }

  saveConfig(config: IDashboardConfig) {
    console.log(config);
  }

  handleAddWidgetConfig(w: IBaseWidgetConfig) {
    this.config.items.push({
      widgetConfig: w,
      gridConfig: {}
    });
    this.configChange.emit(this.config);
  }
}
