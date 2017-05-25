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
export var ColorRangeComponent = (function () {
    function ColorRangeComponent() {
        this.colorEmitor = new EventEmitter();
    }
    ColorRangeComponent.prototype.ngOnInit = function () {
    };
    ColorRangeComponent.prototype.onSelectColor = function (color) {
        this.colorEmitor.emit(color);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], ColorRangeComponent.prototype, "colors", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], ColorRangeComponent.prototype, "colorEmitor", void 0);
    ColorRangeComponent = __decorate([
        Component({
            selector: 'color-range',
            // templateUrl: './color-range.component.html',
            // styleUrls: ['./color-range.component.css']
            template: "\n  <div class=\"mm-color-cube-container\">\n    <div class=\"mm-color-cube\" [style.background]=\"c\" *ngFor=\"let c of colors\" (click)=\"onSelectColor(c)\"></div>\n  </div>\n  ",
            styles: [
                "\n    .mm-color-cube-container {\n        display: flex;\n        flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n    }\n\n    .mm-color-cube {\n        display: inline-flex;\n        width: 20px;\n        height: 20px;\n    }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ColorRangeComponent);
    return ColorRangeComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/color-range/color-range.component.js.map