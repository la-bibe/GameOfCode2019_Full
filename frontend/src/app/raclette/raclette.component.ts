import {Component, HostListener, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css']
})
export class RacletteComponent implements OnInit {

  height: number;
  width: number;

  assets = [
    'assets/raclette/raclette.png',
    'assets/raclette/patate.png',
    'assets/raclette/raclette.png'
  ];

  items: number[];

  constructor(private _sanitizer: DomSanitizer) {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.genItems(6);
  }

  genItems(size: number) {
    this.items = [];
    for (let i = 0; i < size; i++) {
        this.items.push(Math.floor(Math.random() * this.assets.length));
    }
  }

  ngOnInit(): void {
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
}
