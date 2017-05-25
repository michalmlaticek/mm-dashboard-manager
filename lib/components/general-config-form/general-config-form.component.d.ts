import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IBaseDashboardConfig, BaseDashboardConfigFactory } from 'mm-dashboard';
import { ColorSchemaService } from '../../services';
export declare class GeneralConfigFormComponent implements OnInit {
    private fb;
    private colorSchemaService;
    private baseDashboardConfigFactory;
    config: IBaseDashboardConfig;
    configChange: EventEmitter<IBaseDashboardConfig>;
    form: FormGroup;
    colorSchemas: Array<any>;
    constructor(fb: FormBuilder, colorSchemaService: ColorSchemaService, baseDashboardConfigFactory: BaseDashboardConfigFactory);
    ngOnInit(): void;
}
