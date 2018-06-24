import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarFluxoComponent } from './siderbar-fluxo.component';

describe('SiderbarFluxoComponent', () => {
  let component: SiderbarFluxoComponent;
  let fixture: ComponentFixture<SiderbarFluxoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderbarFluxoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderbarFluxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
