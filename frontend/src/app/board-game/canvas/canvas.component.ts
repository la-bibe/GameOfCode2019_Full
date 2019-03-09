import {
  Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {switchMap, takeUntil, pairwise} from 'rxjs/operators';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styles: ['canvas { border: 1px solid #000; max-width: 100%; max-height: 100%;}']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public drawable = false;
  @Input() public width = 500;
  @Input() public height = 500;
  public color = 'black';

  private data;

  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    if (this.data) {
      const dat = new ImageData(this.data, this.width);
      this.cx.putImageData(dat, 0, 0);
    }

    this.clear();
    if (this.drawable) {
      this.initTouchEvent(canvasEl);
      this.captureEvents(canvasEl);
    }
  }

  public initTouchEvent(canvas: HTMLCanvasElement) {
    document.body.addEventListener('touchstart', function (e) {
      if (e.target === canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener('touchend', function (e) {
      if (e.target === canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener('touchmove', function (e) {
      if (e.target === canvas) {
        e.preventDefault();
      }
    }, false);


    canvas.addEventListener('touchstart', function (e) {
      // const mousePos = getTouchPos(canvas, e);
      if (e.target === canvas) {
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
          clientX: touch.clientX,
          clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
      }
    }, false);
    canvas.addEventListener('touchend', function (e) {
      const mouseEvent = new MouseEvent('mouseup', {});
      canvas.dispatchEvent(mouseEvent);
    }, false);
    canvas.addEventListener('touchmove', function (e) {
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);
    }, false);
  }

  public clear() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    this.cx.fillStyle = 'white';
    this.cx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getData() {
    return [this.canvas.nativeElement.toDataURL()];
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point
              pairwise()
            );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
        const actual_size = {x: canvasEl.scrollWidth, y: canvasEl.scrollHeight};

        // previous and current position with the offset
        const prevPos = {
          x: (res[0].clientX - rect.left) * this.width / actual_size.x,
          y: (res[0].clientY - rect.top) * this.height / actual_size.y
        };

        const currentPos = {
          x: (res[1].clientX - rect.left) * this.width / actual_size.x,
          y: (res[1].clientY - rect.top) * this.height / actual_size.y
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cx) {
      return;
    }

    this.cx.fillStyle = this.color;
    this.cx.strokeStyle = this.color;
    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

}
