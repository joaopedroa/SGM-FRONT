import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  senha:any;

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    this.loginService.login(this.email, this.senha).subscribe(data =>{
      window.localStorage.setItem("token", data.access_token);
      this.router.navigate(["/geolocalizacao"]);
    }, err =>{
      alert("Usuário ou Senha incorretos! Favor, verificar bot SGM ou contatar administrador");
    })
  }

}
