import {
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-fashion-draw',
  templateUrl: './fashion-draw.component.html',
  styleUrls: ['./fashion-draw.component.css']
})
export class FashionDrawComponent {

  constructor(private _sanitizer: DomSanitizer) {}

  @Input() drawables: string[];

  @Input() width = 100;
  @Input() height = 100;


  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }

}
