import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDrawComponent } from './fashion-draw.component';

describe('FashionDrawComponent', () => {
  let component: FashionDrawComponent;
  let fixture: ComponentFixture<FashionDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
