import { ModuleWithProviders } from '@angular/core';
import { WidgetConfigList } from './services';
export declare class DashboardManagerModule {
    static forRoot(widgetConfig: WidgetConfigList): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
