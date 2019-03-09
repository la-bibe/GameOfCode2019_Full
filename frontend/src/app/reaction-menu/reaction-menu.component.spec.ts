import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionMenuComponent } from './reaction-menu.component';

describe('ReactionMenuComponent', () => {
  let component: ReactionMenuComponent;
  let fixture: ComponentFixture<ReactionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
