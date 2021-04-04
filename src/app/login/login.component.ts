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

      let tokenDecoded = this.decodeToken(data.access_token);
      console.log("token", tokenDecoded);
      window.localStorage.setItem("token", data.access_token);
      window.localStorage.setItem("user", tokenDecoded['user_name']);
      window.localStorage.setItem("regras", tokenDecoded['authorities']);
     
      this.router.navigate(["/geolocalizacao"]);
    }, err =>{
      alert("Usuário ou Senha incorretos! Favor, verificar bot SGM ou contatar administrador");
    })
  }

  decodeToken(token){
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
  

}
