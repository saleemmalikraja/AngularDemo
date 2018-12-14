import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjservableTestComponent } from './objservable-test.component';

describe('ObjservableTestComponent', () => {
  let component: ObjservableTestComponent;
  let fixture: ComponentFixture<ObjservableTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjservableTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjservableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
