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
export var SectionComponent = (function () {
    function SectionComponent() {
        this.onHeaderClick = new EventEmitter();
    }
    SectionComponent.prototype.clickHeader = function () {
        this.onHeaderClick.emit();
    };
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], SectionComponent.prototype, "title", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], SectionComponent.prototype, "onHeaderClick", void 0);
    SectionComponent = __decorate([
        Component({
            selector: 'mm-section',
            template: "\n        <section class=\"mm-section flex-col\">\n            <h4 (click)=\"clickHeader()\"><span>{{title}}</span></h4>\n            <ng-content class=\"flex-item scroll-y\"></ng-content>\n        </section>\n    ",
            styles: [
                "\n        .mm-section {\n            padding-left: 5px;\n            padding-right: 5px;\n        }\n\n        .mm-section h4 {\n            margin-left: -5px;\n            margin-right: -5px;\n            margin-top: 0px;\n            margin-bottom: 5px;\n            background-color: #bf360c;\n            color: #ffffff;\n            cursor: pointer;\n        }\n\n        .mm-section h4 span {\n            padding-left: 5px;\n            padding-right: 5px;\n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SectionComponent);
    return SectionComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/section/section.component.js.map