var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule, WIDGET_SERVICE, Widgets } from 'mm-dashboard';
import { DndModule } from 'ng2-dnd';
import { DashboardManagerComponent } from './dashboard-manager.component';
import { ColorRangeComponent, ConfigFormPanelComponent, ControllPanelComponent, DataColumnListComponent, GeneralConfigFormComponent, SectionComponent, SubSectionComponent, WidgetListComponent, ContextMenuComponent } from './components';
import { DashboardCoreModule } from 'mm-dashboard-core';
import { ColorSchemaService, WidgetConfig, WIDGET_CONFIG_SERVICE } from './services';
import { WidgetFormFactoryDirective } from './directives';
export var DashboardManagerModule = (function () {
    function DashboardManagerModule() {
    }
    DashboardManagerModule.forRoot = function (widgetConfig) {
        var widgets = widgetConfig;
        console.log("DashboardManagerModule -> forRoot - WidgetConfig to WidgetList", widgets);
        return {
            ngModule: DashboardManagerModule,
            providers: [
                { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) },
                { provide: WIDGET_CONFIG_SERVICE, useValue: new WidgetConfig(widgetConfig) },
                { provide: ColorSchemaService, useClass: ColorSchemaService }
            ]
        };
    };
    DashboardManagerModule.forChild = function () {
        // root will need to provide WIDGET_SERVICE and WIDGET_CONFIG_SERVICE
        return {
            ngModule: DashboardManagerModule,
            providers: [
                // { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) }
                { provide: ColorSchemaService, useClass: ColorSchemaService }
            ]
        };
    };
    DashboardManagerModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                DashboardModule.forChild(),
                DndModule.forRoot(),
                DashboardCoreModule.forChild()
            ],
            declarations: [
                DashboardManagerComponent,
                ControllPanelComponent,
                ConfigFormPanelComponent,
                GeneralConfigFormComponent,
                WidgetFormFactoryDirective,
                DataColumnListComponent,
                ColorRangeComponent,
                SectionComponent,
                SubSectionComponent,
                WidgetListComponent,
                ContextMenuComponent
            ],
            exports: [
                DashboardManagerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardManagerModule);
    return DashboardManagerModule;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/dashboard-manager.module.js.map