import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawRacletteComponent } from './draw-raclette.component';

describe('DrawRacletteComponent', () => {
  let component: DrawRacletteComponent;
  let fixture: ComponentFixture<DrawRacletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawRacletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawRacletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
