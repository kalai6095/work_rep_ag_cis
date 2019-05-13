import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CWiseComponent } from './c-wise.component';

describe('CWiseComponent', () => {
  let component: CWiseComponent;
  let fixture: ComponentFixture<CWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
