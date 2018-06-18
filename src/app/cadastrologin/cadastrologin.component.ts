import { Component, OnInit } from '@angular/core';
import {AuthService}from '../services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cadastrologin',
  templateUrl: './cadastrologin.component.html',
  styleUrls: ['./cadastrologin.component.css']
})
export class CadastrologinComponent implements OnInit {

  constructor
  (
    private authorizationService:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { }
  cadastroemail(cadastroform:NgForm){
    let email=cadastroform.form.controls.Email.value;
    let senha=cadastroform.form.controls.senha.value;
    this.authorizationService.createloginemail(email,senha)
    .then((data)=>{
      console.log();
      this.toastr.success("Cadastrado Com Sucesso !");
      this.router.navigate(['']);
      
    })
    .catch((error)=>{
      console.log(error);
      this.toastr.error("Seu Email ou Senha Inválido ! ",error);
    })

  }

  ngOnInit() {
  }

}
