import {Component, ElementRef, OnInit, Sanitizer, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-draw-raclette',
  templateUrl: './draw-raclette.component.html',
  styleUrls: ['./draw-raclette.component.css']
})
export class DrawRacletteComponent implements OnInit {

  @ViewChild('assiette') el: ElementRef;

  assets = [
    'assets/raclette/raclette.png',
    'assets/raclette/patate.png',
    'assets/raclette/jambom.png'
  ];

  items: [];

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.el.nativeElement.focus();
  }

  setData(data: []) {
    this.items = data;
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }
}
