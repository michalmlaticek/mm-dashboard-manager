import { Injectable } from '@angular/core';
import * as D3Scale from 'd3-scale';
import * as D3ScaleChromatic from 'd3-scale-chromatic';
import { IColorSchema } from 'mm-dashboard-core';
import { IColorSchemaService } from '../interfaces';

@Injectable()
export class ColorSchemaService implements IColorSchemaService {

  constructor() { }

  public getColorSchemas(): Array<IColorSchema> {
    return [
      {
        name: "RAG",
        colors: ["Red", "#FFBE00", "Green"]
      },
      {
        name: "Category10",
        colors: D3Scale.schemeCategory10
      },
      {
        name: "Category20",
        colors: D3Scale.schemeCategory20
      },
      {
        name: "Category20b",
        colors: D3Scale.schemeCategory20b
      },
      {
        name: "Category20c",
        colors: D3Scale.schemeCategory20c
      },
      {
        name: "Accent",
        colors: D3ScaleChromatic.schemeAccent
      },
      {
        name: "Dark2",
        colors: D3ScaleChromatic.schemeDark2
      },
      {
        name: "Paired",
        colors: D3ScaleChromatic.schemePaired
      },
      {
        name: "Pastel1",
        colors: D3ScaleChromatic.schemePastel1
      },
      {
        name: "Pastel2",
        colors: D3ScaleChromatic.schemePastel2
      },
      {
        name: "Set1",
        colors: D3ScaleChromatic.schemeSet1
      },
      {
        name: "Set2",
        colors: D3ScaleChromatic.schemeSet2
      },
      {
        name: "Set3",
        colors: D3ScaleChromatic.schemeSet3
      }
    ]
  }

}
