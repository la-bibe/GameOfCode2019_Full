import {Component, HostListener, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DndDropEvent} from 'ngx-drag-drop';

@Component({
  selector: 'app-raclette',
  templateUrl: './raclette.component.html',
  styleUrls: ['./raclette.component.css']
})
export class RacletteComponent implements OnInit {

  height: number;
  width: number;

  constructor(private _sanitizer: DomSanitizer) {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

  draggable = {
    data: 'myDragData',
    effectAllowed: 'all',
    disable: false,
    handle: false
  };

  ngOnInit() {
  }

  onDragStart(event: DragEvent) {
    console.log('drag started', JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event:DragEvent) {

    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event:DragEvent) {

    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event:DragEvent) {

    console.log('draggable moved', JSON.stringify(event, null, 2));
  }

  onDragCanceled(event:DragEvent) {

    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event:DragEvent) {

    console.log('dragover', JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {
    console.log('dropped', JSON.stringify(event, null, 2));
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }
}
