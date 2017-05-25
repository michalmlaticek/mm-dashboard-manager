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
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { WIDGET_CONFIG_SERVICE, WidgetConfig } from '../../services';
export var WidgetListComponent = (function () {
    function WidgetListComponent(widgetConfigService) {
        this.widgetConfigService = widgetConfigService;
        this.addWidget = new EventEmitter();
        this.widgets = this.widgetConfigService.getBaseConfigs();
    }
    WidgetListComponent.prototype.addWidgetConfig = function (w) {
        this.addWidget.emit(w);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], WidgetListComponent.prototype, "widgets", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], WidgetListComponent.prototype, "addWidget", void 0);
    WidgetListComponent = __decorate([
        Component({
            selector: 'mm-widget-list',
            template: "\n    <section class=\"mm-widget-list\">\n        <ul>\n            <li *ngFor=\"let w of widgets;let i = index\" (click)=\"addWidgetConfig(w)\">{{i + 1}} - {{w.widgetLabel}}</li>\n        </ul>\n    </section>\n    "
        }),
        __param(0, Inject(WIDGET_CONFIG_SERVICE)), 
        __metadata('design:paramtypes', [WidgetConfig])
    ], WidgetListComponent);
    return WidgetListComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/widget-list/widget-list.component.js.map