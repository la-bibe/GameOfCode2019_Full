import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent {

  constructor() { }

  @Input() left = true;

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  emit() {
    this.clicked.emit(true);
  }
}
