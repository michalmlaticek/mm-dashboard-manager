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
import { FormBuilder } from '@angular/forms';
import { BaseDashboardConfigFactory } from 'mm-dashboard';
import { ColorSchemaService } from '../../services';
export var GeneralConfigFormComponent = (function () {
    function GeneralConfigFormComponent(fb, colorSchemaService, baseDashboardConfigFactory) {
        this.fb = fb;
        this.colorSchemaService = colorSchemaService;
        this.baseDashboardConfigFactory = baseDashboardConfigFactory;
        this.configChange = new EventEmitter();
        this.colorSchemas = colorSchemaService.getColorSchemas();
        console.log("color schemas: ", this.colorSchemas);
    }
    GeneralConfigFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("initializing BaseDashboardConfig: ", this.config);
        this.config = this.baseDashboardConfigFactory.init(this.config);
        this.form = this.fb.group({
            title: [this.config.title],
            gridConfig: this.fb.group({
                // margins: [this.config.gridConfig.margins],             // number[]
                draggable: [this.config.gridConfig.draggable],
                resizable: [this.config.gridConfig.resizable],
                max_cols: [this.config.gridConfig.max_cols],
                max_rows: [this.config.gridConfig.max_rows],
                visible_cols: [this.config.gridConfig.visible_cols],
                visible_rows: [this.config.gridConfig.visible_rows],
                min_cols: [this.config.gridConfig.min_cols],
                min_rows: [this.config.gridConfig.min_rows],
                col_width: [this.config.gridConfig.col_width],
                row_height: [this.config.gridConfig.row_height],
                cascade: [this.config.gridConfig.cascade],
                min_width: [this.config.gridConfig.min_width],
                min_height: [this.config.gridConfig.min_height],
                fix_to_grid: [this.config.gridConfig.fix_to_grid],
                auto_style: [this.config.gridConfig.auto_style],
                auto_resize: [this.config.gridConfig.auto_resize],
                maintain_ratio: [this.config.gridConfig.maintain_ratio],
                prefer_new: [this.config.gridConfig.prefer_new],
                zoom_on_drag: [this.config.gridConfig.zoom_on_drag],
                limit_to_screen: [this.config.gridConfig.limit_to_screen] //boolean;
            })
        });
        this.form.valueChanges.subscribe(function (config) {
            console.log("emmiting general config", config);
            _this.configChange.emit(config);
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], GeneralConfigFormComponent.prototype, "config", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], GeneralConfigFormComponent.prototype, "configChange", void 0);
    GeneralConfigFormComponent = __decorate([
        Component({
            selector: 'mm-general-config-form',
            template: "\n    <div class=\"mm-chart-form\" [formGroup]=\"form\">\n      <p class=\"mm-form-group\">\n        <label>Dashboard Name:</label>\n        <input type=\"text\" formControlName=\"title\">\n      </p>\n      <div formGroupName=\"gridConfig\">\n        <p>\n          <label>Dragable</label>\n          <input type=\"checkbox\" formControlName=\"draggable\">\n        </p>\n        <p>\n          <label>Resizable</label>\n          <input type=\"checkbox\" formControlName=\"resizable\">\n        </p>\n        <p>\n          <label>Max column count</label>\n          <input type=\"text\" formControlName=\"max_cols\">\n        </p>\n        <p>\n          <label>Max row count</label>\n          <input type=\"text\" formControlName=\"max_rows\">\n        </p>\n        <p>\n          <label>Visible column count</label>\n          <input type=\"text\" formControlName=\"visible_cols\">\n        </p>\n        <p> \n          <label>Visible row count</label>\n          <input type=\"text\" formControlName=\"visible_rows\">\n        </p>\n        <p>\n          <label>Min column count</label>\n          <input type=\"text\" formControlName=\"min_cols\">\n        </p>\n        <p>\n          <label>Min row count</label>\n          <input type=\"text\" formControlName=\"min_rows\">\n        </p>\n        <p>\n          <label>Column width</label>\n          <input type=\"text\" formControlName=\"col_width\">\n        </p>\n        <p>\n          <label>Row height</label>\n          <input type=\"text\" formControlName=\"row_height\">\n        </p>\n        <p>\n          <label>Cascade</label>\n          <input type=\"text\" formControlName=\"cascade\">\n        </p>\n        <p>\n          <label>Min width</label>\n          <input type=\"text\" formControlName=\"min_width\">\n        </p>\n        <p>\n          <label>Min height</label>\n          <input type=\"text\" formControlName=\"min_height\">\n        </p>\n        <p>\n          <label>Fix to grid</label>\n          <input type=\"checkbox\" formControlName=\"fix_to_grid\">\n        </p>\n        <p>\n          <label>Auto Style</label>\n          <input type=\"checkbox\" formControlName=\"auto_style\">\n        </p>\n        <p>\n          <label>Auto resize</label>\n          <input type=\"checkbox\" formControlName=\"auto_resize\">\n        </p>\n        <p>\n          <label>Maintain Ratio</label>\n          <input type=\"checkbox\" formControlName=\"maintain_ratio\">\n        </p>\n        <p>\n          <label>Prefer new</label>\n          <input type=\"checkbox\" formControlName=\"prefer_new\">\n        </p>\n        <p>\n          <label>Zoom on drag</label>\n          <input type=\"checkbox\" formControlName=\"zoom_on_drag\">\n        </p>\n        <p>\n          <label>Limit to screen</label>\n          <input type=\"checkbox\" formControlName=\"limit_to_screen\">\n        </p>\n      </div>\n    </div>\n    ",
            styles: [
                "\n    \n    "
            ]
        }), 
        __metadata('design:paramtypes', [FormBuilder, ColorSchemaService, BaseDashboardConfigFactory])
    ], GeneralConfigFormComponent);
    return GeneralConfigFormComponent;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/components/general-config-form/general-config-form.component.js.map