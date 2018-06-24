import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoDiaComponent } from './resumo-dia.component';

describe('ResumoDiaComponent', () => {
  let component: ResumoDiaComponent;
  let fixture: ComponentFixture<ResumoDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
