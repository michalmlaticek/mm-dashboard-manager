var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as D3Scale from 'd3-scale';
import * as D3ScaleChromatic from 'd3-scale-chromatic';
export var ColorSchemaService = (function () {
    function ColorSchemaService() {
    }
    ColorSchemaService.prototype.getColorSchemas = function () {
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
        ];
    };
    ColorSchemaService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], ColorSchemaService);
    return ColorSchemaService;
}());
//# sourceMappingURL=C:/_user/Code/dashboard/mm-dashboard-manager/src/services/color-schema.service.js.map