import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioPsicologiaComponent } from './cuestionario-psicologia.component';

describe('CuestionarioPsicologiaComponent', () => {
  let component: CuestionarioPsicologiaComponent;
  let fixture: ComponentFixture<CuestionarioPsicologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioPsicologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioPsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
