import {Component, HostListener, OnInit} from '@angular/core';
import {FashionWeekService} from '../../services/fashion-week.service';
import {ClotheType} from '../../models/fashion-week/clothe-type';
import {Clothe} from '../../models/fashion-week/clothe';

@Component({
  selector: 'app-fashion-week',
  templateUrl: './fashion-week.component.html',
  styleUrls: ['./fashion-week.component.css']
})
export class FashionWeekComponent implements OnInit {

  clothes: ClotheType[];
  selectedClothes: Clothe[];

  width: any;
  height: any;

  constructor(private fashionWeekService: FashionWeekService) {
    this.height = window.innerHeight;
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
    for (let i = 0; i < this.clothes.length; i++) {
      this.selectedClothes.push(this.clothes[i].clothes[0]);
    }
  }

  aled() {
    console.log(this.selectedClothes);
  }
}