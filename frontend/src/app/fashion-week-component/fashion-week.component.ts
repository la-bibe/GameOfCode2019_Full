import {Component, HostListener, OnInit} from '@angular/core';
import {FashionWeekService} from '../../services/fashion-week.service';

@Component({
  selector: 'app-fashion-week',
  templateUrl: './fashion-week.component.html',
  styleUrls: ['./fashion-week.component.css']
})
export class FashionWeekComponent implements OnInit {

  clothes: string[][];
  selectedClothes: string[];
  seletedIds: number[];

  width: any;
  height: any;

  ready = false;

  constructor(private fashionWeekService: FashionWeekService) {
    this.height = window.innerHeight * 0.75;
    this.width = window.innerWidth;
  }

  ngOnInit() {
    this.getClothes();
  }

  getClothes() {
    this.fashionWeekService.clothes().subscribe(
      data => {
        this.clothes = data;
        this.initSelectedClothes();
      },
      error => console.log(error)
    );
  }

  initSelectedClothes() {
    this.selectedClothes = [];
    this.seletedIds = [];
    for (let i = 0; i < this.clothes.length; i++) {
      const j = Math.floor(Math.random() * this.clothes[i].length);
      this.selectedClothes.push(this.clothes[i][j]);
      this.seletedIds.push(j);
    }
    this.ready = true;
  }

  select(i: number, id: number) {
    this.selectedClothes[i] = this.clothes[i][id];
    this.seletedIds[i] = id;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }

  selectNext(i: number) {
    console.log('aled');
    const id = this.seletedIds[i];
    this.select(i, id >= this.clothes[i].length - 1 ? 0 : id + 1);
  }

  selectPrev(i: number) {
    console.log('aled');
    const id = this.seletedIds[i];
    this.select(i, id <= 0 ? this.clothes[i].length - 1 : id - 1);
  }

  getData() {
    return this.seletedIds;
  }
}
