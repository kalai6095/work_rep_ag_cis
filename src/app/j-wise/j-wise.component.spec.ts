import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JWiseComponent } from './j-wise.component';

describe('JWiseComponent', () => {
  let component: JWiseComponent;
  let fixture: ComponentFixture<JWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
