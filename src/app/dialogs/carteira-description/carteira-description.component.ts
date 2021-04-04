import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Projeto } from 'app/models/Projeto';
export interface DialogData {
  projeto: Projeto
}

@Component({
  selector: 'app-carteira-description',
  templateUrl: './carteira-description.component.html',
  styleUrls: ['./carteira-description.component.css']
})


export class CarteiraDescriptionComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data.projeto);
  }

}
