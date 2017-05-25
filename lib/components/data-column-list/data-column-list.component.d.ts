import { OnInit } from '@angular/core';
import { IColumn } from 'mm-dashboard-core';
export declare class DataColumnListComponent implements OnInit {
    columns: Set<IColumn>;
    constructor();
    ngOnInit(): void;
}
