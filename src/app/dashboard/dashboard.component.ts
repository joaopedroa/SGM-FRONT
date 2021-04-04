import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarteiraService } from 'app/services/carteira.service';
import { GeolocalizacaoService } from 'app/services/geolocalizacao.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private carteiraService:CarteiraService, private geoService:GeolocalizacaoService) { 
    this.getTotalProjetosCadastrados();
    this.getTotalInfosCidadesCadastrado();
    this.usuarioLogado = window.localStorage.getItem("user");
    this.perfis = this.formatPerfis();
  }

  totalProjetosCadastrados:any = 0;
  totalInfosCadastrados:any = 0;
  usuarioLogado:any;
  perfis:any;
  
  ngOnInit() {

  };

  goCarteira(){
    this.router.navigate(["carteira-projetos"]);
  }  

  getTotalProjetosCadastrados(){
    this.carteiraService.getTotalProjetosCadastrados().subscribe(data =>{
      this.totalProjetosCadastrados = data;
    })
  }

  getTotalInfosCidadesCadastrado(){
    this.geoService.getTotalInfosCadastrado().subscribe(data =>{
      this.totalInfosCadastrados = data;
    })
  }

  formatPerfis(){
    let itens =  window.localStorage.getItem("regras").split(",");
    let regras:string = "";
    let y:number = 1;
    itens.forEach(x =>{
      regras += x.replace("ROLE_", "");
      if(y < itens.length)
        regras += ", ";
      y++;

    
    }) 
    return regras;
  }


  

    

}
