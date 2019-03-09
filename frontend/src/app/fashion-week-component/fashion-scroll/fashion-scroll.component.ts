import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Clothe} from '../../../models/fashion-week/clothe';
import {ClotheType} from '../../../models/fashion-week/clothe-type';

@Component({
  selector: 'app-fashion-scroll',
  templateUrl: './fashion-scroll.component.html',
  styleUrls: ['./fashion-scroll.component.css']
})
export class FashionScrollComponent implements OnInit {

  @Input() clotheType: ClotheType;

  @Input() selected: Clothe;
  @Output() selectedChange: EventEmitter<Clothe> = new EventEmitter();

  id = 0;

  ngOnInit() {
    this.emit();
  }

  emit() {
    console.log('aled');
    this.selected = this.clotheType.clothes[this.id % this.clotheType.clothes.length];
    this.selectedChange.emit(this.selected);
  }

  next() {
    this.id++;
    this.emit();
  }
}
