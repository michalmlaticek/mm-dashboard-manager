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
export var ContextMenuComponent = (function () {
    function ContextMenuComponent() {
    }
    ContextMenuComponent.prototype.ngOnChanges = function (change) {
        console.log("ContextMenuComponent -> ngOnChanges: ", change);
    };
    __decorate([
        Input(), 
        __metadata('design:type', MouseEvent)
    ], ContextMenuComponent.prototype, "contextEvent", void 0);
    ContextMenuComponent = __decorate([
        Component({
            selector: 'mm-context-menu',
            template: "\n    <div class=\"mm-context-menu\" [style.top]=\"contextEvent.clientY + 'px'\" [style.left]=\"contextEvent.clientX + 'px'\">\n        <ul>\n            <ng-content></ng-content>\n        </ul>\n    </div>\n    ",
            styles: [
                "\n        .mm-context-menu {\n            display: block;\n            position: absolute;\n            z-index: 4000;\n            background: rgba(109,73,46,50);\n        }\n\n        .mm-context-menu ul {\n            list-style-type: none;\n            margin: 0px 0px;\n            padding: 5px 5px;\n        }\n        \n        "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/context-menu/context-menu.component.js.map