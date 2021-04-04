import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estado } from 'app/models/Estado';
import { InfoMunicipio } from 'app/models/InfoMunicipio';
import { Municipio } from 'app/models/Municipio';
import { GeolocalizacaoService } from 'app/services/geolocalizacao.service';

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

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: DialogData, private geoService: GeolocalizacaoService,
  public dialogRef: MatDialogRef<CadastrarGeolocalizacaoComponent>) { }

  info:InfoMunicipio = new InfoMunicipio(0,0,0);
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      populacaoEstimada: ['', Validators.required],
      populacaoUltimoCenso: ['', Validators.required],
      densidadeDemografica: ['', Validators.required]
    });
  }

  cadastrarInformacoesMunicipio(){
  
    this.info = this.form.value;
    this.info.municipioId = this.data.municipio.id;
    
    this.geoService.cadastrarInfoMunicipio(this.info).subscribe(data =>{
      this.closeDialog();
    })
  }

  closeDialog() {
    this.dialogRef.close(JSON.stringify(this.info));
  }
}
