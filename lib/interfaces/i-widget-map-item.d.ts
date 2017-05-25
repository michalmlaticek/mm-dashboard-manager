import { Type } from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
export interface IWidgetMapItem {
    baseConf: IBaseWidgetConfig;
    widgetComponent: Type<any>;
    formComponent: Type<any>;
}
