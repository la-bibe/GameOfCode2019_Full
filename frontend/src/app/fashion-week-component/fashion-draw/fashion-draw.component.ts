import {
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {FashionWeekService} from '../../../services/fashion-week.service';

@Component({
  selector: 'app-fashion-draw',
  templateUrl: './fashion-draw.component.html',
  styleUrls: ['./fashion-draw.component.css']
})
export class FashionDrawComponent {

  constructor(private _sanitizer: DomSanitizer, private fashionWeekService: FashionWeekService) {}

  @Input() drawables: string[];

  @Input() width = 100;
  @Input() height = 100;


  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }

  setData(selectedIds: number[]) {
    this.fashionWeekService.clothes().subscribe(
      data => {
        this.drawables = [];
        for (let i = 0; i < selectedIds.length; i++) {
          this.drawables.push(data[i][selectedIds[i]]);
        }
      },
      error => console.log(error)
    );

  }

}
