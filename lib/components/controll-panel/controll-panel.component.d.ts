import { OnInit, EventEmitter } from '@angular/core';
import { IDashboardConfig } from 'mm-dashboard';
export declare class ControllPanelComponent implements OnInit {
    config: IDashboardConfig;
    activeChartId: number;
    columns: Set<string>;
    configChange: EventEmitter<IDashboardConfig>;
    nonInputProp: any;
    constructor();
    ngOnInit(): void;
    handleConfigChange(newConfig: any): void;
}
