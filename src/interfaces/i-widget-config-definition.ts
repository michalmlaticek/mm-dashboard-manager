import { Type, OpaqueToken } from '@angular/core';
import { IWidgetDefinition } from 'mm-dashboard';

export interface IWidgetConfigDefinition extends IWidgetDefinition {
    formComponent: Type<any>;
}