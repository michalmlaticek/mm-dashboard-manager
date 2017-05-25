import { Type } from '@angular/core';
import { IWidgetDefinition } from 'mm-dashboard';
export interface IWidgetConfigDefinition extends IWidgetDefinition {
    formComponent: Type<any>;
}
