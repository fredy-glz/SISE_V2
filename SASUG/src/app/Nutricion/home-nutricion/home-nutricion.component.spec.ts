import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNutricionComponent } from './home-nutricion.component';

describe('HomeNutricionComponent', () => {
  let component: HomeNutricionComponent;
  let fixture: ComponentFixture<HomeNutricionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNutricionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNutricionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
