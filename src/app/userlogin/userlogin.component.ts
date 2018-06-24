import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import{dadosuser} from '../models/dadosuser';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent  {

  
  constructor(
    private authorizationService:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { }
  Logado:boolean=false;
  Loginface(){
    this.authorizationService.LoginFacebook()
    .then((data)=>{
     
     /* this.toastr.success("Login Realizado com Sucesso !");
      window.location.replace('http://localhost:4200/home');*/
      this.router.navigateByUrl('/home');
    })
    .catch((error)=>{
      console.log(error);
      this.toastr.error("Seu Email ou Senha Inválido ! ",error);
    })

  }
  Logingoogle(){
    this.authorizationService.LoginGoogle()
    .then((data)=>{
      console.log();
      this.toastr.success("Login Realizado com Sucesso !");
      window.location.replace('http://localhost:4200/home');
     /* this.router.navigateByUrl('/home');*/
      
    })
    .catch((error)=>{
      console.log(error);
      this.toastr.error("Email ou Senha Inválido ! ",error);
    })

  
}

Loginemail(loginform:NgForm){
  let email= loginform.form.controls.useremail.value;
  let senha= loginform.form.controls.usersenha.value;
  this.authorizationService.LoginEmail(email,senha)
  .then((data)=>{
    console.log();
    this.toastr.success("Login Realizado com Sucesso !");
    window.location.replace('http://localhost:4200/home');
    /*this.router.navigateByUrl('/home');*/
    
  })
  .catch((error)=>{
    console.log(error);
    this.toastr.error(" Email ou Senha Inválido ! ",error);
  })
  
  


}
enviar(loginform){
  console.log(loginform);
}

}
