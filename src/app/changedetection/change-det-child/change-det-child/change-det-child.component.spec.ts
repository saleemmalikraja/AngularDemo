import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetChildComponent } from './change-det-child.component';

describe('ChangeDetChildComponent', () => {
  let component: ChangeDetChildComponent;
  let fixture: ComponentFixture<ChangeDetChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
