import { IColorSchema } from 'mm-dashboard-core';
import { IColorSchemaService } from '../interfaces';
export declare class ColorSchemaService implements IColorSchemaService {
    constructor();
    getColorSchemas(): Array<IColorSchema>;
}
