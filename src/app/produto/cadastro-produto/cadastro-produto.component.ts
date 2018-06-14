import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {produto} from '../../models/produto';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
  listaprodutos:AngularFireList<any>;
  opstatus:any;
  opserpro:any;
  produtos: Observable<any[]>;
  idproduto:number;
  

  
  constructor
  (
    private angularfire:AngularFireDatabase,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.produtos=this.angularfire.list("Produtos").valueChanges();
    this.produtos.subscribe(item=>(
    this.idproduto=item.length
    ));
    
    
  }
  //metodo recebe os dados do formulario e grava no firebase
  gravaproduto(cadastroproduto:NgForm)
  {
    this.angularfire.list("Produtos").push({
    IDProduto:(this.idproduto+1),
    Tipo: this.opserpro,
    NomeProdutoServiço:cadastroproduto.form.controls.nomeproduto.value,
    PreçoVenda: cadastroproduto.form.controls.precovenda.value,
    PreçoCusto: cadastroproduto.form.controls.precocusto.value,
    Grupo: cadastroproduto.form.controls.grupo.value,
    Estoque: cadastroproduto.form.controls.estoque.value,
    Status:this.opstatus,
    CodigodeBarras: cadastroproduto.form.controls.codbarra.value,
  })
    this.toastr.success("Produto Cadastrado com Sucesso !");
    cadastroproduto.form.reset();
    
  }
  
  
  getProdutos(){
   
  }
  updateprodutos(){
    
  }
  resetform(cadastroproduto:NgForm){
    if(cadastroproduto!=null){

    }
  }
  removeprodutos(){

  }

  

}
