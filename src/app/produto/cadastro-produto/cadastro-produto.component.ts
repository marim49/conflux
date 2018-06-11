import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {produto} from '../../models/produto';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
  listaprodutos:AngularFireList<any>;
  opstatus:any;
  produtos: Observable<any[]>;
  

  
  constructor(private angularfire:AngularFireDatabase) { }

  ngOnInit() {
    this.produtos=this.angularfire.list("Produtos").valueChanges();
    
  }
  //metodo recebe os dados do formulario e grava no firebase
  gravaproduto(cadastroproduto:NgForm)
  {
    this.angularfire.list("Produtos").push({
    NomeProduto:cadastroproduto.form.controls.nomeproduto.value,
    UnidadeMedida: cadastroproduto.form.controls.unidademedida.value,
    QuantidadePadrao: cadastroproduto.form.controls.qtdpadrao.value,
    Valor: cadastroproduto.form.controls.valor.value,
    Status:this.opstatus,
  })

    cadastroproduto.controls.nomeproduto.setValue("");
    cadastroproduto.controls.unidademedida.setValue("");
    cadastroproduto.controls.valor.setValue("");
    cadastroproduto.controls.qtdpadrao.setValue("");
  }
  
  
  getProdutos(){
   
  }
  updateprodutos(){
    
  }
  resetform(cadastroproduto:NgForm){
    if(cadastroproduto!=null){

    }
  }

  

}
