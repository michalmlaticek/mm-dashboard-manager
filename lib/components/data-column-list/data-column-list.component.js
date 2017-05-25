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
export var DataColumnListComponent = (function () {
    function DataColumnListComponent() {
    }
    DataColumnListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Set)
    ], DataColumnListComponent.prototype, "columns", void 0);
    DataColumnListComponent = __decorate([
        Component({
            selector: 'mm-column-list-panel',
            // templateUrl: './columns.component.html',
            // styleUrls: ['./columns.component.css']
            template: "\n      <section class=\"mm-column-list-panel\">\n        <mm-section [title]=\"'Columns'\">\n          <ul class=\"scroll-y\">\n            <li class=\"mm-column\" *ngFor=\"let col of columns;let i = index\" dnd-draggable [dragEnabled]=\"true\" [dragData]=\"col\">\n              <span>{{col.label | truncate : 7}}</span>\n            </li>\n          </ul>\n        </mm-section>\n      </section>  \n    ",
            styles: [
                "\n        .mm-column-list-panel ul {\n            padding: 0px;\n        }\n\n        .mm-column {\n            background-color: #EFEFEF;\n            list-style-type: none;\n            margin-bottom: 5px;\n            width: 100%;\n            border-radius: 4px;\n            cursor: move;\n        }\n\n        .mm-column span {\n            padding-left: 10px;\n            padding-right: 10px;\n        }\n      "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DataColumnListComponent);
    return DataColumnListComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/data-column-list/data-column-list.component.js.map