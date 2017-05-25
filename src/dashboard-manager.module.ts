import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule, WidgetList, WIDGET_SERVICE, Widgets } from 'mm-dashboard';
import { MmObjectFactory } from 'mm-dashboard-core';
import { DndModule } from 'ng2-dnd';

// components
import { DashboardManagerComponent } from './dashboard-manager.component';
import {
  ColorRangeComponent,
  ConfigFormPanelComponent,
  ControllPanelComponent,
  DataColumnListComponent,
  GeneralConfigFormComponent,
  SectionComponent,
  SubSectionComponent,
  WidgetListComponent,
  ContextMenuComponent
} from './components';
import { DashboardCoreModule } from 'mm-dashboard-core';

//services
import { ColorSchemaService, WidgetConfig, WidgetConfigList, WIDGET_CONFIG_SERVICE } from './services';
import { WidgetFormFactoryDirective } from './directives';

@NgModule({
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
})
export class DashboardManagerModule {
  static forRoot(widgetConfig: WidgetConfigList): ModuleWithProviders {
    let widgets: WidgetList = <WidgetList>widgetConfig;
    console.log("DashboardManagerModule -> forRoot - WidgetConfig to WidgetList", widgets);
    return {
      ngModule: DashboardManagerModule,
      providers: [
        { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) },
        { provide: WIDGET_CONFIG_SERVICE, useValue: new WidgetConfig(widgetConfig) },
        { provide: ColorSchemaService, useClass: ColorSchemaService }
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    // root will need to provide WIDGET_SERVICE and WIDGET_CONFIG_SERVICE
    return {
      ngModule: DashboardManagerModule,
      providers: [
        // { provide: WIDGET_SERVICE, useValue: new Widgets(widgets) }
        { provide: ColorSchemaService, useClass: ColorSchemaService }
      ]
    };
  }
}
