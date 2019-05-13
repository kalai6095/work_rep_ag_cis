import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EWiseComponent } from './e-wise.component';

describe('EWiseComponent', () => {
  let component: EWiseComponent;
  let fixture: ComponentFixture<EWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
