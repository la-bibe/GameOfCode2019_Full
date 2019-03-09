import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CdkDragMove} from '@angular/cdk/drag-drop';
import {Vertex} from '../../models/vertex';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css']
})
export class RacletteComponent implements OnInit {
  assets = [
    'assets/raclette/raclette.png',
    'assets/raclette/patate.png',
    'assets/raclette/jambom.png'
  ];

  @ViewChild('assiette') el: ElementRef;

  items: any[];

  constructor(private _sanitizer: DomSanitizer) {
    this.genItems(6);
  }

  genItems(size: number) {
    this.items = [];
    for (let i = 0; i < size; i++) {
      this.items.push({
        'id': Math.floor(Math.random() * this.assets.length),
        'pos': new Vertex(0, 0)
      });
    }
  }

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }

  move(event: CdkDragMove, id: number) {
    console.log(id);
    this.items[id].pos = new Vertex(
      (event.pointerPosition.x - this.el.nativeElement.offsetLeft) / this.el.nativeElement.offsetWidth,
      (event.pointerPosition.y - this.el.nativeElement.offsetTop) / this.el.nativeElement.offsetHeight
    );
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }

  getData() {
    return this.items;
  }
}
