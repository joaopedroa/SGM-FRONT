import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraDescriptionComponent } from './carteira-description.component';

describe('CarteiraDescriptionComponent', () => {
  let component: CarteiraDescriptionComponent;
  let fixture: ComponentFixture<CarteiraDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
