import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input, IterableDiffer,
  IterableDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Clothe} from '../../../models/fashion-week/clothe';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-fashion-draw',
  templateUrl: './fashion-draw.component.html',
  styleUrls: ['./fashion-draw.component.css']
})
export class FashionDrawComponent implements AfterViewInit, DoCheck {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() clothes: Clothe[];

  @Input() width = 100;
  @Input() height = 100;

  private cx: CanvasRenderingContext2D;

  iterableDiffer: IterableDiffer<{}>;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.clothes);
    if (changes) {
      this.render();
    }
  }

  ngAfterViewInit(): void {
    this.cx  = this.canvas.nativeElement.getContext('2d');
    this.render();
  }


  renderClothe(clothe: Clothe) {
    console.log('rendering', clothe.parts.length);
    if (!this.cx) {
      return;
    }
    this.cx.clearRect(0, 0, this.width, this.height);
    this.cx.rect(0, 0, this.width, this.height);
    this.cx.stroke();
    for (let i = 0; i < clothe.parts.length; i++) {
      const part = clothe.parts[i];
      const image = new Image();
      image.src = 'assets/fashion_week/modularcharacters/PNG/' + part.path;
      image.onload = this.drawImg(image, part, clothe);
    }
  }

  drawImg(image, part, clothe): any {
    setTimeout(() => {
      this.cx.drawImage(image,
        clothe.pos.x + clothe.size.x * part.pos.x,
        clothe.pos.y + clothe.size.y * part.pos.y,
        this.width * clothe.size.x * part.size.x,
        this.height * clothe.size.y * part.size.y);
    }, 1000);
  }

  render() {
    this.renderClothe(this.clothes[0]);
    for (let i = 0; i < this.clothes.length; i++) {
      this.renderClothe(this.clothes[i]);
    }
  }

}
