import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabResultComponent } from './dynamic-tab-result.component';

describe('DynamicTabResultComponent', () => {
  let component: DynamicTabResultComponent;
  let fixture: ComponentFixture<DynamicTabResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
