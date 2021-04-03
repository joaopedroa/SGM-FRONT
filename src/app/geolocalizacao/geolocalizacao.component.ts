import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CadastrarGeolocalizacaoComponent } from 'app/dialogs/cadastrar-geolocalizacao/cadastrar-geolocalizacao.component';
import { Estado } from 'app/models/Estado';
import { Municipio } from 'app/models/Municipio';
import { GeolocalizacaoService } from 'app/services/geolocalizacao.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.component.html',
  styleUrls: ['./geolocalizacao.component.css']
})
export class GeolocalizacaoComponent implements OnInit {

  @ViewChild('dataContainer') dataContainer: ElementRef;

  estados: any[] = [];
  municipios: any[] = [];
  selectEstado: Estado = new Estado();
  selectMunicipio: Municipio = new Municipio();
  svg:SafeHtml;


  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 4, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 4, color: '#DDBDF1'},
  ];
  constructor(private geoService: GeolocalizacaoService, private sanitizer: DomSanitizer, public dialog: MatDialog) {
    this.getTodosEstados();
   }

  ngOnInit(): void {
    
  }

 

  getTodosEstados(){
    this.geoService.getTodosEstados().subscribe(data =>{
      this.estados = data;
    });
  }

  changeSelectEstado(){
   this.geoService.getCidadesPorIdDoEstado(this.selectEstado.id).subscribe(data =>{
     this.municipios = data;
   })
  }

  changeSelectMunicipio(){
    console.log(this.selectMunicipio.id)
    this.geoService.getMalhaPorIdMunicipio(this.selectMunicipio.id).then(data =>{
      console.log(data);
      data = data.replace('width="1080"', 'width="500"').replace('height="1080"','height="500"' );
      this.svg = this.sanitizer.bypassSecurityTrustHtml(data);

    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CadastrarGeolocalizacaoComponent, {
      data: {municipio: this.selectMunicipio, estado: this.selectEstado}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
