import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FWiseComponent } from './f-wise.component';

describe('FWiseComponent', () => {
  let component: FWiseComponent;
  let fixture: ComponentFixture<FWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
