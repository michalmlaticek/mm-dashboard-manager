import { OnInit, EventEmitter } from '@angular/core';
import { IDashboardConfig, IBaseDashboardConfig } from 'mm-dashboard';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
import { WidgetConfig } from '../../services';
export declare enum CONFIG_PANEL_SECTION {
    GENERAL_SETTINGS = 0,
    WIDGET_LIST = 1,
    WIDGET_SETTINGS = 2,
    ACTIONS = 3,
}
export declare class ConfigFormPanelComponent implements OnInit {
    private widgetConfigService;
    config: IDashboardConfig;
    activeChartId: number;
    configChange: EventEmitter<IDashboardConfig>;
    activeSection: CONFIG_PANEL_SECTION;
    generalConfig: IBaseDashboardConfig;
    widgets: Array<IBaseWidgetConfig>;
    constructor(widgetConfigService: WidgetConfig);
    ngOnInit(): void;
    expandSection(section: CONFIG_PANEL_SECTION): void;
    handleGeneralConfigChange(generalConfig: IBaseDashboardConfig): void;
    handleWidgetConfigChange(newConfig: any): void;
    saveConfig(config: IDashboardConfig): void;
    handleAddWidgetConfig(w: IBaseWidgetConfig): void;
}
