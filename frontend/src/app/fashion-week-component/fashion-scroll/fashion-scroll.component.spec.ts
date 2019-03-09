import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionScrollComponent } from './fashion-scroll.component';

describe('FashionScrollComponent', () => {
  let component: FashionScrollComponent;
  let fixture: ComponentFixture<FashionScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
