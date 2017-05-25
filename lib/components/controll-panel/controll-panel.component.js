var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var ControllPanelComponent = (function () {
    function ControllPanelComponent() {
        this.configChange = new EventEmitter();
    }
    ControllPanelComponent.prototype.ngOnInit = function () {
    };
    ControllPanelComponent.prototype.handleConfigChange = function (newConfig) {
        this.configChange.emit(newConfig);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ControllPanelComponent.prototype, "config", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], ControllPanelComponent.prototype, "activeChartId", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Set)
    ], ControllPanelComponent.prototype, "columns", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], ControllPanelComponent.prototype, "configChange", void 0);
    ControllPanelComponent = __decorate([
        Component({
            selector: 'mm-controll-panel',
            // templateUrl: './controll-panel.component.html',
            // styleUrls: ['./controll-panel.component.css',
            //   '../dashboard-manager.component.css']
            template: "\n    <mm-config-form-panel class=\"mm-config-panel mm-col mm-chart-setup-panel-col\" [config]=\"config\" [activeChartId]=\"activeChartId\" (configChange)=\"handleConfigChange($event)\"></mm-config-form-panel>\n    <mm-column-list-panel class=\"mm-column-panel mm-col mm-columns-col\" [columns]=\"columns\"></mm-column-list-panel>\n  ",
            styles: [
                "\n    .mm-config-panel {\n      width: 70%;\n    }\n\n    .mm-column-panel {\n      width: 30%;\n    }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ControllPanelComponent);
    return ControllPanelComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/controll-panel/controll-panel.component.js.map