import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionWeekComponentComponent } from './fashion-week-component.component';

describe('FashionWeekComponentComponent', () => {
  let component: FashionWeekComponentComponent;
  let fixture: ComponentFixture<FashionWeekComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionWeekComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionWeekComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
