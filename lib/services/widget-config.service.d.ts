import { Type, OpaqueToken } from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
import { IWidgetConfigDefinition } from '../interfaces';
export { Type, OpaqueToken };
export declare type WidgetConfigList = IWidgetConfigDefinition[];
export declare class WidgetConfig {
    private widgetConfig;
    private widgetBaseConfigs;
    constructor(widgets: WidgetConfigList);
    getBaseConfigs(): Array<IBaseWidgetConfig>;
    getBaseConfigById(widgetId: string): IBaseWidgetConfig;
    getWidgetComponentById(widgetId: string): Type<any>;
    getFormComponentById(widgetId: string): Type<any>;
}
export declare let WIDGET_CONFIG_SERVICE: OpaqueToken;
