import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent {

  constructor(private _sanitizer: DomSanitizer) { }

  @Input() height = 0;
  @Input() left = true;

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  emit() {
    this.clicked.emit(true);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }
}
