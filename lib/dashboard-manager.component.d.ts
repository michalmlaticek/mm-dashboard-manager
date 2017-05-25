import { EventEmitter, ElementRef, Renderer } from '@angular/core';
import { IColumn } from 'mm-dashboard-core';
import { IDashboardConfig } from 'mm-dashboard';
export declare class DashboardManagerComponent {
    private renderer;
    private elem;
    config: IDashboardConfig;
    data: Array<any>;
    columns: Set<IColumn>;
    configChange: EventEmitter<IDashboardConfig>;
    private activeChartId;
    private contextEvent;
    constructor(renderer: Renderer, elem: ElementRef);
    private onWidgetSelected(selectEvent);
    private onWidgetRightClick(contextEvent);
    private onConfigChange(newConfig);
    private removeWidget();
    private onManagerClick(event);
}
