var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var SubSectionComponent = (function () {
    // private expanded: boolean;
    function SubSectionComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SubSectionComponent.prototype, "title", void 0);
    SubSectionComponent = __decorate([
        Component({
            selector: 'mm-sub-section',
            template: "\n        <section class=\"mm-sub-section\">\n            <h5><span>{{title}}</span></h5>\n            <ng-content></ng-content>\n        </section>\n    ",
            styles: [
                "\n        .mm-sub-section h3 {\n            border-bottom: 1px solid #000;\n        }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SubSectionComponent);
    return SubSectionComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/sub-section/sub-section.component.js.map