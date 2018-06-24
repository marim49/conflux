import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoFluxoComponent } from './conteudo-fluxo.component';

describe('ConteudoFluxoComponent', () => {
  let component: ConteudoFluxoComponent;
  let fixture: ComponentFixture<ConteudoFluxoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoFluxoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoFluxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
