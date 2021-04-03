import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estado } from 'app/models/Estado';
import { Municipio } from 'app/models/Municipio';

export interface DialogData {
  estado: Estado;
  municipio: Municipio;
}

@Component({
  selector: 'app-cadastrar-geolocalizacao',
  templateUrl: './cadastrar-geolocalizacao.component.html',
  styleUrls: ['./cadastrar-geolocalizacao.component.css']
})
export class CadastrarGeolocalizacaoComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  cadastrarInformacoesMunicipio(){
    
  }
}
