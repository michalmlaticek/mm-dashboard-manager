import { Type, OpaqueToken } from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
import { IWidgetConfigDefinition, IWidgetMapItem } from '../interfaces';
export { Type, OpaqueToken };

export declare type WidgetConfigList = IWidgetConfigDefinition[];

export class WidgetConfig {
    private widgetConfig: Map<string, IWidgetMapItem>;
    private widgetBaseConfigs: Array<IBaseWidgetConfig> = new Array();

    constructor(widgets: WidgetConfigList) {
        this.widgetConfig = new Map();
        widgets.forEach(w => {
            console.log("WidgetConfig -> contructor: widgetId, widgetComp, formComp", w.widgetId);
            this.widgetConfig[w.widgetId] = {
                baseConf: {
                    widgetId: w.widgetId,
                    widgetLabel: w.widgetLabel,
                    widgetDescription: w.widgetDescription
                },
                widgetComponent: w.widgetComponent,
                formComponent: w.formComponent
            };
            this.widgetBaseConfigs.push(this.widgetConfig[w.widgetId].baseConf);
        });
    }

    getBaseConfigs(): Array<IBaseWidgetConfig> {
        return this.widgetBaseConfigs;
    }

    getBaseConfigById(widgetId: string): IBaseWidgetConfig {
        return this.widgetConfig[widgetId].baseConf;
    }

    getWidgetComponentById(widgetId: string): Type<any> {
        return this.widgetConfig[widgetId].widgetComponent;
    }

    getFormComponentById(widgetId: string): Type<any> {
        return this.widgetConfig[widgetId].formComponent;
    }
}

export let WIDGET_CONFIG_SERVICE = new OpaqueToken("mm-widget-config-service");