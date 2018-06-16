import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoPublicoComponent } from './acesso-publico.component';

describe('AcessoPublicoComponent', () => {
  let component: AcessoPublicoComponent;
  let fixture: ComponentFixture<AcessoPublicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoPublicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
