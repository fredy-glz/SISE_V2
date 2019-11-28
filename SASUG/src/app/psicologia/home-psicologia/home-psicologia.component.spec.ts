import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePsicologiaComponent } from './home-psicologia.component';

describe('HomePsicologiaComponent', () => {
  let component: HomePsicologiaComponent;
  let fixture: ComponentFixture<HomePsicologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePsicologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
