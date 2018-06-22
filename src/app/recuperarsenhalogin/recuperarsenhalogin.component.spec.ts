import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarsenhaloginComponent } from './recuperarsenhalogin.component';

describe('RecuperarsenhaloginComponent', () => {
  let component: RecuperarsenhaloginComponent;
  let fixture: ComponentFixture<RecuperarsenhaloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarsenhaloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarsenhaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
