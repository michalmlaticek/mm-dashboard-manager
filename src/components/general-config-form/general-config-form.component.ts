import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IBaseDashboardConfig, BaseDashboardConfigFactory } from 'mm-dashboard';
import { ColorSchemaService } from '../../services';

@Component({
  selector: 'mm-general-config-form',
  template:
  `
    <div class="mm-chart-form" [formGroup]="form">
      <p class="mm-form-group">
        <label>Dashboard Name:</label>
        <input type="text" formControlName="title">
      </p>
      <div formGroupName="gridConfig">
        <p>
          <label>Dragable</label>
          <input type="checkbox" formControlName="draggable">
        </p>
        <p>
          <label>Resizable</label>
          <input type="checkbox" formControlName="resizable">
        </p>
        <p>
          <label>Max column count</label>
          <input type="text" formControlName="max_cols">
        </p>
        <p>
          <label>Max row count</label>
          <input type="text" formControlName="max_rows">
        </p>
        <p>
          <label>Visible column count</label>
          <input type="text" formControlName="visible_cols">
        </p>
        <p> 
          <label>Visible row count</label>
          <input type="text" formControlName="visible_rows">
        </p>
        <p>
          <label>Min column count</label>
          <input type="text" formControlName="min_cols">
        </p>
        <p>
          <label>Min row count</label>
          <input type="text" formControlName="min_rows">
        </p>
        <p>
          <label>Column width</label>
          <input type="text" formControlName="col_width">
        </p>
        <p>
          <label>Row height</label>
          <input type="text" formControlName="row_height">
        </p>
        <p>
          <label>Cascade</label>
          <input type="text" formControlName="cascade">
        </p>
        <p>
          <label>Min width</label>
          <input type="text" formControlName="min_width">
        </p>
        <p>
          <label>Min height</label>
          <input type="text" formControlName="min_height">
        </p>
        <p>
          <label>Fix to grid</label>
          <input type="checkbox" formControlName="fix_to_grid">
        </p>
        <p>
          <label>Auto Style</label>
          <input type="checkbox" formControlName="auto_style">
        </p>
        <p>
          <label>Auto resize</label>
          <input type="checkbox" formControlName="auto_resize">
        </p>
        <p>
          <label>Maintain Ratio</label>
          <input type="checkbox" formControlName="maintain_ratio">
        </p>
        <p>
          <label>Prefer new</label>
          <input type="checkbox" formControlName="prefer_new">
        </p>
        <p>
          <label>Zoom on drag</label>
          <input type="checkbox" formControlName="zoom_on_drag">
        </p>
        <p>
          <label>Limit to screen</label>
          <input type="checkbox" formControlName="limit_to_screen">
        </p>
      </div>
    </div>
    `,
  styles: [
    `
    
    `
  ]
})
export class GeneralConfigFormComponent implements OnInit {

  @Input() config: IBaseDashboardConfig;
  @Output() configChange: EventEmitter<IBaseDashboardConfig> = new EventEmitter<IBaseDashboardConfig>();

  form: FormGroup;
  colorSchemas: Array<any>;

  constructor(
    private fb: FormBuilder,
    private colorSchemaService: ColorSchemaService,
    private baseDashboardConfigFactory: BaseDashboardConfigFactory
  ) {
    this.colorSchemas = colorSchemaService.getColorSchemas();
    console.log("color schemas: ", this.colorSchemas);
  }

  ngOnInit() {
    console.log("initializing BaseDashboardConfig: ", this.config);
    this.config = this.baseDashboardConfigFactory.init(this.config);
    this.form = this.fb.group({
      title: [this.config.title],
      gridConfig: this.fb.group({
        // margins: [this.config.gridConfig.margins],             // number[]
        draggable: [this.config.gridConfig.draggable],            // boolean
        resizable: [this.config.gridConfig.resizable],            // boolean
        max_cols: [this.config.gridConfig.max_cols],              // number
        max_rows: [this.config.gridConfig.max_rows],              //number
        visible_cols: [this.config.gridConfig.visible_cols],      // number;
        visible_rows: [this.config.gridConfig.visible_rows],      // number;
        min_cols: [this.config.gridConfig.min_cols],              // number;
        min_rows: [this.config.gridConfig.min_rows],              // number;
        col_width: [this.config.gridConfig.col_width],            // number;
        row_height: [this.config.gridConfig.row_height],          // number;
        cascade: [this.config.gridConfig.cascade],                // string;
        min_width: [this.config.gridConfig.min_width],            // number;
        min_height: [this.config.gridConfig.min_height],          // number;
        fix_to_grid: [this.config.gridConfig.fix_to_grid],        // boolean;
        auto_style: [this.config.gridConfig.auto_style],          // boolean;
        auto_resize: [this.config.gridConfig.auto_resize],        // boolean;
        maintain_ratio: [this.config.gridConfig.maintain_ratio],  // boolean;
        prefer_new: [this.config.gridConfig.prefer_new],          // boolean;
        zoom_on_drag: [this.config.gridConfig.zoom_on_drag],      // boolean;
        limit_to_screen: [this.config.gridConfig.limit_to_screen] //boolean;
      })
    });

    this.form.valueChanges.subscribe(
      (config: IBaseDashboardConfig) => {
        console.log("emmiting general config", config);
        this.configChange.emit(config);
      }
    )
  }
}
