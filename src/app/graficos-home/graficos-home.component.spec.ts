import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosHomeComponent } from './graficos-home.component';

describe('GraficosHomeComponent', () => {
  let component: GraficosHomeComponent;
  let fixture: ComponentFixture<GraficosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
