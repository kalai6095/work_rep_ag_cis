import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJComponent } from './add-j.component';

describe('AddJComponent', () => {
  let component: AddJComponent;
  let fixture: ComponentFixture<AddJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
