var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { WidgetConfig, WIDGET_CONFIG_SERVICE } from '../../services';
export var CONFIG_PANEL_SECTION;
(function (CONFIG_PANEL_SECTION) {
    CONFIG_PANEL_SECTION[CONFIG_PANEL_SECTION["GENERAL_SETTINGS"] = 0] = "GENERAL_SETTINGS";
    CONFIG_PANEL_SECTION[CONFIG_PANEL_SECTION["WIDGET_LIST"] = 1] = "WIDGET_LIST";
    CONFIG_PANEL_SECTION[CONFIG_PANEL_SECTION["WIDGET_SETTINGS"] = 2] = "WIDGET_SETTINGS";
    CONFIG_PANEL_SECTION[CONFIG_PANEL_SECTION["ACTIONS"] = 3] = "ACTIONS";
})(CONFIG_PANEL_SECTION || (CONFIG_PANEL_SECTION = {}));
export var ConfigFormPanelComponent = (function () {
    function ConfigFormPanelComponent(widgetConfigService) {
        this.widgetConfigService = widgetConfigService;
        this.configChange = new EventEmitter();
        this.widgets = this.widgetConfigService.getBaseConfigs();
    }
    ConfigFormPanelComponent.prototype.ngOnInit = function () {
        console.log("onInit: 'MmChartSetupPanelComponent'");
        this.generalConfig = { title: this.config.title };
    };
    ConfigFormPanelComponent.prototype.expandSection = function (section) {
        if (this.activeSection == section) {
            this.activeSection = null;
        }
        else {
            this.activeSection = section;
        }
    };
    ConfigFormPanelComponent.prototype.handleGeneralConfigChange = function (generalConfig) {
        // console.log("general config changed");
        var newDashboardConfig = {
            title: generalConfig.title,
            gridConfig: generalConfig.gridConfig,
            items: this.config.items
        };
        console.log("new dashboard config: ", newDashboardConfig);
        this.configChange.emit(newDashboardConfig);
    };
    ConfigFormPanelComponent.prototype.handleWidgetConfigChange = function (newConfig) {
        console.log("change: ", newConfig);
        this.config.items[this.activeChartId].widgetConfig = newConfig;
        this.configChange.emit(this.config);
    };
    ConfigFormPanelComponent.prototype.saveConfig = function (config) {
        console.log(config);
    };
    ConfigFormPanelComponent.prototype.handleAddWidgetConfig = function (w) {
        this.config.items.push({
            widgetConfig: w,
            gridConfig: {}
        });
        this.configChange.emit(this.config);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ConfigFormPanelComponent.prototype, "config", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], ConfigFormPanelComponent.prototype, "activeChartId", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], ConfigFormPanelComponent.prototype, "configChange", void 0);
    ConfigFormPanelComponent = __decorate([
        Component({
            selector: 'mm-config-form-panel',
            template: "\n  <section class=\"mm-config-form-panel mm-controll-form flex-col\">\n    <mm-section [title]=\"'General Settings'\" class=\"flex-item flex-col\" (onHeaderClick)=\"expandSection(0)\">\n      <mm-general-config-form *ngIf=\"activeSection==0\" [config]=\"generalConfig\" (configChange)=\"handleGeneralConfigChange($event)\" class=\"scroll-y\"></mm-general-config-form>\n    </mm-section>\n    <mm-section [title]=\"'Widget List'\" class=\"flex-item flex-col\" (onHeaderClick)=\"expandSection(1)\">\n      <mm-widget-list *ngIf=\"activeSection==1\" [widgets]=\"widgets\" (addWidget)=\"handleAddWidgetConfig($event)\"></mm-widget-list>\n    </mm-section>\n    <mm-section [title]=\"'Chart Settings'\" class=\"flex-item flex-col\" (onHeaderClick)=\"expandSection(2)\">\n      <div *ngIf=\"activeChartId!=-1 && activeSection==2\" mm-widget-form [config]=\"config.items[activeChartId]?.widgetConfig\" (configChange)=\"handleWidgetConfigChange($event)\" class=\"scroll-y\"></div>\n    </mm-section>\n    <mm-section [title]=\"'Actions'\" class=\"flex-item flex-col\" (onHeaderClick)=\"expandSection(3)\">\n      <div *ngIf=\"activeSection==3\">\n        <button type=\"submit\">Save</button>\n      </div>\n    </mm-section>\n  </section>\n  ",
            styles: [
                "\n    .mm-chart-config-area {\n        height: 70%;\n        overflow-y: auto;\n    }\n\n    label, input, select {\n        display: block;\n        width: 100%;\n        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n        -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n        box-sizing: border-box;         /* Opera/IE 8+ */\n    }\n\n    .display-none {\n        display: none;\n    }\n    "
            ]
        }),
        __param(0, Inject(WIDGET_CONFIG_SERVICE)), 
        __metadata('design:paramtypes', [WidgetConfig])
    ], ConfigFormPanelComponent);
    return ConfigFormPanelComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/config-form-panel/config-form-panel.component.js.map