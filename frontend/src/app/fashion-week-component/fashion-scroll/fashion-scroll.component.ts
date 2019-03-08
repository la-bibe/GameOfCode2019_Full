import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Clothe} from '../../../models/fashion-week/clothe';

@Component({
  selector: 'app-fashion-scroll',
  templateUrl: './fashion-scroll.component.html',
  styleUrls: ['./fashion-scroll.component.css']
})
export class FashionScrollComponent implements OnInit {

  @Input() items: Clothe[];

  @Input() selected: Clothe;
  @Output() selectedChange: EventEmitter<Clothe>;

  id = 0;

  ngOnInit() {
    this.emit();
  }

  emit() {
    this.selected = this.items[this.id % this.items.length];
    this.selectedChange.emit(this.selected);
  }

  prev() {
    this.id--;
    this.emit();
  }

  next() {
    this.id++;
    this.emit();
  }
}
