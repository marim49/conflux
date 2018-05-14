import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrologinComponent } from './cadastrologin.component';

describe('CadastrologinComponent', () => {
  let component: CadastrologinComponent;
  let fixture: ComponentFixture<CadastrologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
