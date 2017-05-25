import { Type, OpaqueToken } from '@angular/core';
export { Type, OpaqueToken };
export var WidgetConfig = (function () {
    function WidgetConfig(widgets) {
        var _this = this;
        this.widgetBaseConfigs = new Array();
        this.widgetConfig = new Map();
        widgets.forEach(function (w) {
            console.log("WidgetConfig -> contructor: widgetId, widgetComp, formComp", w.widgetId);
            _this.widgetConfig[w.widgetId] = {
                baseConf: {
                    widgetId: w.widgetId,
                    widgetLabel: w.widgetLabel,
                    widgetDescription: w.widgetDescription
                },
                widgetComponent: w.widgetComponent,
                formComponent: w.formComponent
            };
            _this.widgetBaseConfigs.push(_this.widgetConfig[w.widgetId].baseConf);
        });
    }
    WidgetConfig.prototype.getBaseConfigs = function () {
        return this.widgetBaseConfigs;
    };
    WidgetConfig.prototype.getBaseConfigById = function (widgetId) {
        return this.widgetConfig[widgetId].baseConf;
    };
    WidgetConfig.prototype.getWidgetComponentById = function (widgetId) {
        return this.widgetConfig[widgetId].widgetComponent;
    };
    WidgetConfig.prototype.getFormComponentById = function (widgetId) {
        return this.widgetConfig[widgetId].formComponent;
    };
    return WidgetConfig;
}());
export var WIDGET_CONFIG_SERVICE = new OpaqueToken("mm-widget-config-service");
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/services/widget-config.service.js.map