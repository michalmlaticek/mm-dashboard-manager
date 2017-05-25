import { EventEmitter } from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
import { WidgetConfig } from '../../services';
export declare class WidgetListComponent {
    private widgetConfigService;
    widgets: Array<IBaseWidgetConfig>;
    addWidget: EventEmitter<IBaseWidgetConfig>;
    constructor(widgetConfigService: WidgetConfig);
    addWidgetConfig(w: IBaseWidgetConfig): void;
}
