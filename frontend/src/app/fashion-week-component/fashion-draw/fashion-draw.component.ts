import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Clothe} from '../../../models/fashion-week/clothe';

@Component({
  selector: 'app-fashion-draw',
  templateUrl: './fashion-draw.component.html',
  styleUrls: ['./fashion-draw.component.css']
})
export class FashionDrawComponent implements OnInit, OnChanges {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() clothes: Clothe[];

  private cx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  renderClothe(clothe: Clothe) {
    if (!this.cx) {
      return;
    }
    this.cx.clearRect(0, 0, 100, 100)
    this.cx.beginPath();
    for (let i = 0; i < clothe.parts.length; i++) {
      const part = clothe.parts[i];
      const image = new Image();
      image.src = 'assets/fashion_week/modularcharacters/PNG/' + part.path;
      this.cx.drawImage(image,
        clothe.pos.x + clothe.size.x * part.pos.x,
        clothe.pos.y + clothe.size.y * part.pos.y,
        100 * clothe.size.x * part.size.x,
        100 * clothe.size.y * part.size.y);
    }
  }

  render() {
    for (let i = 0; i < this.clothes.length; i++) {
      this.renderClothe(this.clothes[i]);
    }
  }

}
