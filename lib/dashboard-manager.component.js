var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
export var DashboardManagerComponent = (function () {
    function DashboardManagerComponent(renderer, elem) {
        this.renderer = renderer;
        this.elem = elem;
        this.configChange = new EventEmitter();
        this.activeChartId = -1;
    }
    DashboardManagerComponent.prototype.onWidgetSelected = function (selectEvent) {
        console.log("DashboardManagerComponent -> handleWidgetSelection: ", selectEvent);
        this.activeChartId = selectEvent.item;
        // this.contextEvent = null;
    };
    DashboardManagerComponent.prototype.onWidgetRightClick = function (contextEvent) {
        console.log("DashboardManagerComponent -> onWidgetRightClick: ", contextEvent.event);
        this.activeChartId = contextEvent.item;
        contextEvent.event.preventDefault();
        this.contextEvent = contextEvent.event;
    };
    DashboardManagerComponent.prototype.onConfigChange = function (newConfig) {
        console.log("DashboardManagerComponent -> onConfigChange: newConfig: ", newConfig);
        console.log("Is newConfig === config: ", newConfig === this.config);
        this.config = newConfig;
        this.configChange.emit(newConfig);
        this.contextEvent = null;
    };
    DashboardManagerComponent.prototype.removeWidget = function () {
        this.config.items.splice(this.activeChartId, 1);
        this.contextEvent = null;
    };
    DashboardManagerComponent.prototype.onManagerClick = function (event) {
        this.contextEvent = null;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], DashboardManagerComponent.prototype, "config", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DashboardManagerComponent.prototype, "data", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Set)
    ], DashboardManagerComponent.prototype, "columns", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], DashboardManagerComponent.prototype, "configChange", void 0);
    DashboardManagerComponent = __decorate([
        Component({
            selector: 'mm-dashboard-manager',
            // templateUrl: './dashboard-manager.component.html',
            // styleUrls: ['./dashboard-manager.component.css'],
            template: "\n    <div class=\"mm-dashboard-manager flex-row height-full\" (click)=\"onManagerClick($event)\">\n      <div class=\"mm-dm-full-dashboard scroll-y\">\n        <mm-dashboard [config]=\"config\" [(data)]=\"data\" (selectedItem)=\"onWidgetSelected($event)\" (rightClick)=\"onWidgetRightClick($event)\"></mm-dashboard>\n      </div>\n      <div class=\"mm-dm-controll height-full\">\n        <mm-controll-panel class=\"flex-row height-full\" [config]=\"config\" [columns]=\"columns\" \n        [activeChartId]=\"activeChartId\" (configChange)=\"onConfigChange($event)\"></mm-controll-panel>\n      </div>\n      <mm-context-menu *ngIf=\"contextEvent\" [contextEvent]=\"contextEvent\">\n        <li (click)=\"removeWidget()\">Remove widget</li>\n      </mm-context-menu>\n    </div>\n  ",
            styles: [
                "\n      .mm-dashboard-manager {\n          position: relative;\n          height: 100%;\n      }\n\n      .block {\n          display: block;\n      }\n\n      .flex-row {\n          display: flex;\n      }\n\n      .flex-col {\n          display: flex;\n          flex-flow: column;\n          max-height: 100%;\n      }\n\n      .flex-item {\n          flex: 1 1 auto;\n      }\n\n      .flex-item-2 {\n          flex: 2 1 auto;\n      }\n\n      .scroll-y {\n          overflow-x: hidden;\n          overflow-y: auto;\n      }\n\n      .mm-dm-full-dashboard {\n          width: 70%;\n      }\n\n      .mm-dm-controll {\n          width: 30%;\n          border-left: 1px dashed #bf360c;\n      }\n\n      .height-full {\n          height: 100%;\n      }\n\n      .mm-col {\n          padding-left: 5px;\n          padding-right: 5px;\n      }\n\n      .mm-col h4 {\n          margin-left: -5px;\n          margin-right: -5px;\n          margin-top: 0px;\n          margin-bottom: 5px;\n          background-color: #bf360c;\n          color: #ffffff;\n      }\n\n      .mm-col h4 span {\n          padding-left: 5px;\n          padding-right: 5px;\n      }\n\n      .mm-chart-setup-panel-col {\n          /*background-color: #424242;*/\n      }\n\n      .mm-columns-col {\n          border-left: 1px dashed #bf360c;\n          /*background-color: #757575;*/\n      }\n    "
            ],
            encapsulation: ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [Renderer, ElementRef])
    ], DashboardManagerComponent);
    return DashboardManagerComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/dashboard-manager.component.js.map