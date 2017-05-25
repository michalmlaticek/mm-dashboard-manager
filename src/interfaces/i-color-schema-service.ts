import { IColorSchema } from 'mm-dashboard-core';

export interface IColorSchemaService {
    getColorSchemas(): Array<IColorSchema>
}