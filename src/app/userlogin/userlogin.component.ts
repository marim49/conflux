import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import{dadosuser} from '../models/dadosuser';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent  {

  
  constructor(private authorizationService:AuthService,private router:Router) { }
  Logado:boolean=false;
  Loginface(){
    this.authorizationService.LoginFacebook()
    .then((data)=>{
      console.log();
      alert ('Logado');
    })
    .catch((error)=>{
      console.log(error);
      alert('Não Logado');
    })

  }
  Logingoogle(){
    this.authorizationService.LoginGoogle()
    .then((data)=>{
      console.log();
      alert ('Logado');
    })
    .catch((error)=>{
      console.log(error);
      alert('Não Logado');
    })

  
}

Loginemail(loginform:NgForm){
  let email= loginform.form.controls.useremail.value;
  let senha= loginform.form.controls.usersenha.value;
  this.authorizationService.LoginEmail(email,senha)
  .then((data)=>{
    console.log();
    alert ('Logado');
    this.router.navigate(['/sidebar']);
    
  })
  .catch((error)=>{
    console.log(error);
    alert('Não Logado');
  })
  
  


}
enviar(loginform){
  console.log(loginform);
}

}
