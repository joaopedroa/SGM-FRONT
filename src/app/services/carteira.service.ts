import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from 'app/models/Projeto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private http:HttpClient) { }

  cadastrarProjeto(projeto:Projeto){
    return this.http.post(`${environment.apiUrl}/sgm-carteiraprojetos-service/api/v1/projetos`, projeto);
  }

  getTodosProjetos(sort:any, direction:any, page:any){
    return this.http.get(`${environment.apiUrl}/sgm-carteiraprojetos-service/api/v1/projetos?page=${page}&size=5`);
  }

  deleteProjeto(projeto:Projeto){
    return this.http.delete<any>(`${environment.apiUrl}/sgm-carteiraprojetos-service/api/v1/projetos/${projeto.id}`);
  }

  getTotalProjetosCadastrados(){
    return this.http.get(`${environment.apiUrl}/sgm-carteiraprojetos-service/api/v1/projetos/total`);
  }
}
