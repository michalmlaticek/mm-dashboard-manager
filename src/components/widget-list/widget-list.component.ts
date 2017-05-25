import { Component, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges, SimpleChange } from '@angular/core';
import { IBaseWidgetConfig } from 'mm-dashboard-core';
import { WIDGET_CONFIG_SERVICE, WidgetConfig } from '../../services';

@Component({
    selector: 'mm-widget-list',
    template:
    `
    <section class="mm-widget-list">
        <ul>
            <li *ngFor="let w of widgets;let i = index" (click)="addWidgetConfig(w)">{{i + 1}} - {{w.widgetLabel}}</li>
        </ul>
    </section>
    `
})
export class WidgetListComponent {
    @Input() widgets: Array<IBaseWidgetConfig>;
    @Output() addWidget: EventEmitter<IBaseWidgetConfig> = new EventEmitter<IBaseWidgetConfig>();


    constructor( @Inject(WIDGET_CONFIG_SERVICE) private widgetConfigService: WidgetConfig) {
        this.widgets = this.widgetConfigService.getBaseConfigs();
    }

    addWidgetConfig(w: IBaseWidgetConfig) {
        this.addWidget.emit(w);
    }

}