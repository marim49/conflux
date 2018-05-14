import { Component, OnInit } from '@angular/core';
import {AuthService}from '../services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrologin',
  templateUrl: './cadastrologin.component.html',
  styleUrls: ['./cadastrologin.component.css']
})
export class CadastrologinComponent implements OnInit {

  constructor(private authorizationService:AuthService,private router:Router) { }
  cadastroemail(cadastroform:NgForm){
    let email=cadastroform.form.controls.Email.value;
    let senha=cadastroform.form.controls.senha.value;
    this.authorizationService.createloginemail(email,senha)
    .then((data)=>{
      console.log();
      alert ('Cadastrado com Sucesso');
      this.router.navigate(['']);
      
    })
    .catch((error)=>{
      console.log(error);
      alert('Cadastro não efetuado');
    })

  }

  ngOnInit() {
  }

}
