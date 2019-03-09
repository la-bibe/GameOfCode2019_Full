import {
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-fashion-draw',
  templateUrl: './fashion-draw.component.html',
  styleUrls: ['./fashion-draw.component.css']
})
export class FashionDrawComponent {

  constructor() {
  }

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() drawables: string[];

  @Input() width = 100;
  @Input() height = 100;

  private cx: CanvasRenderingContext2D;

}
