import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit {

  @Input() type: any;

  @Output() die: EventEmitter<any> = new EventEmitter<any>();

  private timeoutId;

  ttl: number;
  lived: number;
  top: number;
  x: number;

  constructor() {
  }

  ngOnInit() {
    // @ts-ignore
    this.ttl = Math.random() * 1000 + 1000;
    // @ts-ignore
    this.x = Math.random() * 100;
    // @ts-ignore
    this.top = Math.random() * 50 + 25;
    this.lived = 0;
    this.timeoutId = setInterval(() => {
      this.lived += 10;
      if (this.lived >= this.ttl) {
        this.die.emit();
        clearInterval(this.timeoutId);
      }
    }, 10);
  }

  getPercent() {
    return this.lived / this.ttl;
  }

}
