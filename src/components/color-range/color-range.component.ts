import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-range',
  // templateUrl: './color-range.component.html',
  // styleUrls: ['./color-range.component.css']
  template:
  `
  <div class="mm-color-cube-container">
    <div class="mm-color-cube" [style.background]="c" *ngFor="let c of colors" (click)="onSelectColor(c)"></div>
  </div>
  `,
  styles: [
    `
    .mm-color-cube-container {
        display: flex;
        flex-wrap: wrap;
        -ms-flex-wrap: wrap;
    }

    .mm-color-cube {
        display: inline-flex;
        width: 20px;
        height: 20px;
    }
    `
  ]
})
export class ColorRangeComponent implements OnInit {

  @Input() colors;
  @Output() colorEmitor = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectColor(color) {
    this.colorEmitor.emit(color);
  }

}
