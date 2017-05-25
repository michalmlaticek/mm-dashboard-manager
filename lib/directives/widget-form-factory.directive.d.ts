import { ComponentFactoryResolver, EventEmitter, OnChanges, OnDestroy, SimpleChanges, ViewContainerRef } from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
import { WidgetConfig } from '../services';
export declare class WidgetFormFactoryDirective implements OnChanges, OnDestroy {
    private widgetConfig;
    private vcRef;
    private resolver;
    config: IBaseWidgetConfig;
    configChange: EventEmitter<any>;
    componentRef: any;
    init: boolean;
    constructor(widgetConfig: WidgetConfig, vcRef: ViewContainerRef, resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    create(changes: SimpleChanges): void;
}
