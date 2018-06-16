import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoAdminComponent } from './acesso-admin.component';

describe('AcessoAdminComponent', () => {
  let component: AcessoAdminComponent;
  let fixture: ComponentFixture<AcessoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
