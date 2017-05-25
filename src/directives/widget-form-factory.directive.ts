import {
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  EventEmitter,
  Input,
  Inject,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
import { WIDGET_CONFIG_SERVICE, WidgetConfig } from '../services';

@Directive({
  selector: '[mm-widget-form]'
})
export class WidgetFormFactoryDirective implements OnChanges, OnDestroy {

  @Input() config: IBaseWidgetConfig;
  @Output() configChange: EventEmitter<any> = new EventEmitter();

  componentRef;
  init = false;

  constructor(
    @Inject(WIDGET_CONFIG_SERVICE) private widgetConfig: WidgetConfig,
    private vcRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("WidgetFormFactoryDirective -> ngOnChanges", changes);
    console.log("------ FORM COMPONENT ----- : ", this.widgetConfig, this.widgetConfig.getFormComponentById(this.config.widgetId));
    if (!this.config || !this.widgetConfig.getFormComponentById(this.config.widgetId)) return;
    let configChange = <SimpleChange>changes["config"];
    if (configChange) {
      if (configChange.currentValue.widgetId != configChange.previousValue.widgetId) {
        this.ngOnDestroy();
        this.create(changes);
      } else {
        this.componentRef.instance.config = configChange.currentValue;
        this.componentRef.instance.ngOnChanges(changes);
      }
    }
  }

  ngOnDestroy() {
    console.log("WidgetFormFactoryDirective -> ngOnDestroy");
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  create(changes: SimpleChanges) {
    console.log("WidgetFormFactoryDirective -> create");
    const factory = this.resolver.resolveComponentFactory(this.widgetConfig.getFormComponentById(this.config.widgetId));
    const compRef = this.vcRef.createComponent(factory);
    console.log("WidgetFormFactoryDirective -> setConfig:", this.config);
    (<any>compRef).instance.config = this.config;
    (<any>compRef).instance.configChange.subscribe(
      (conf) => {
        console.log("WidgetFormFactory -> emiting config change: ", conf);
        this.configChange.emit(conf);
      }
    );
    (<any>compRef).instance.ngOnChanges(changes);
    this.componentRef = compRef;
    this.init = true;
  }
}
