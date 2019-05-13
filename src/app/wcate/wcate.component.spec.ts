import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcateComponent } from './wcate.component';

describe('WcateComponent', () => {
  let component: WcateComponent;
  let fixture: ComponentFixture<WcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
