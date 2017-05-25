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
import { ComponentFactoryResolver, Directive, EventEmitter, Input, Inject, Output, ViewContainerRef } from '@angular/core';
import { WIDGET_CONFIG_SERVICE, WidgetConfig } from '../services';
export var WidgetFormFactoryDirective = (function () {
    function WidgetFormFactoryDirective(widgetConfig, vcRef, resolver) {
        this.widgetConfig = widgetConfig;
        this.vcRef = vcRef;
        this.resolver = resolver;
        this.configChange = new EventEmitter();
        this.init = false;
    }
    WidgetFormFactoryDirective.prototype.ngOnChanges = function (changes) {
        console.log("WidgetFormFactoryDirective -> ngOnChanges", changes);
        console.log("------ FORM COMPONENT ----- : ", this.widgetConfig, this.widgetConfig.getFormComponentById(this.config.widgetId));
        if (!this.config || !this.widgetConfig.getFormComponentById(this.config.widgetId))
            return;
        var configChange = changes["config"];
        if (configChange) {
            if (configChange.currentValue.widgetId != configChange.previousValue.widgetId) {
                this.ngOnDestroy();
                this.create(changes);
            }
            else {
                this.componentRef.instance.config = configChange.currentValue;
                this.componentRef.instance.ngOnChanges(changes);
            }
        }
    };
    WidgetFormFactoryDirective.prototype.ngOnDestroy = function () {
        console.log("WidgetFormFactoryDirective -> ngOnDestroy");
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    WidgetFormFactoryDirective.prototype.create = function (changes) {
        var _this = this;
        console.log("WidgetFormFactoryDirective -> create");
        var factory = this.resolver.resolveComponentFactory(this.widgetConfig.getFormComponentById(this.config.widgetId));
        var compRef = this.vcRef.createComponent(factory);
        console.log("WidgetFormFactoryDirective -> setConfig:", this.config);
        compRef.instance.config = this.config;
        compRef.instance.configChange.subscribe(function (conf) {
            console.log("WidgetFormFactory -> emiting config change: ", conf);
            _this.configChange.emit(conf);
        });
        compRef.instance.ngOnChanges(changes);
        this.componentRef = compRef;
        this.init = true;
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], WidgetFormFactoryDirective.prototype, "config", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], WidgetFormFactoryDirective.prototype, "configChange", void 0);
    WidgetFormFactoryDirective = __decorate([
        Directive({
            selector: '[mm-widget-form]'
        }),
        __param(0, Inject(WIDGET_CONFIG_SERVICE)), 
        __metadata('design:paramtypes', [WidgetConfig, ViewContainerRef, ComponentFactoryResolver])
    ], WidgetFormFactoryDirective);
    return WidgetFormFactoryDirective;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/directives/widget-form-factory.directive.js.map