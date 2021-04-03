import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarGeolocalizacaoComponent } from './cadastrar-geolocalizacao.component';

describe('CadastrarGeolocalizacaoComponent', () => {
  let component: CadastrarGeolocalizacaoComponent;
  let fixture: ComponentFixture<CadastrarGeolocalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarGeolocalizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarGeolocalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
