import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoMunicipio } from 'app/models/InfoMunicipio';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacaoService {

  constructor(private http:HttpClient) { }

  getTodosEstados(){
    return this.http.get<any>(`${environment.apiUrl}/sgm-georeferenciamento-service/api/v1/localidades/estados`);
  }

  getCidadesPorIdDoEstado(id:any){
    return this.http.get<any>(`${environment.apiUrl}/sgm-georeferenciamento-service/api/v1/localidades/municipios/${id}`);
  }

  getMalhaPorIdMunicipio(id:any){
    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');
    return this.http.get(`${environment.apiUrl}/sgm-georeferenciamento-service/api/v1/localidades/malhas/municipios/${id}`,  {headers, responseType: 'text'}).toPromise();
    
  }

  cadastrarInfoMunicipio(info:InfoMunicipio){
    return this.http.post(`${environment.apiUrl}/sgm-georeferenciamento-service/api/v1/info/municipio`, info);
  }
}
