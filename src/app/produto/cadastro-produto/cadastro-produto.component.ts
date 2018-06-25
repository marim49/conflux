import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { produto } from '../../models/produto';
import { ToastrService } from "ngx-toastr";
import { Action } from 'rxjs/scheduler/Action';
import { map } from 'rxjs/operators';

declare var $:any;
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  
  listaprodutos: AngularFireList<any>;
  opstatus: any;
  opserpro: any;
  produtos: Observable<any[]>;
  keyselect: any;



  constructor
    (
    private angularfire: AngularFireDatabase,
    private toastr: ToastrService
    ) { }

  ngOnInit() {

    this.listaprodutos = this.angularfire.list('Produtos');

    this.produtos = this.listaprodutos.snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));



  }
  //metodo recebe os dados do formulario e grava no firebase
  gravaproduto(cadastroproduto: NgForm) {
    this.angularfire.list("Produtos").push({
      CodProduto: cadastroproduto.form.controls.codproduto.value,
      Tipo: this.opserpro,
      NomeProdutoServico: cadastroproduto.form.controls.nomeproduto.value,
      PrecoVenda: cadastroproduto.form.controls.precovenda.value,
      PrecoCusto: cadastroproduto.form.controls.precocusto.value,
      Grupo: cadastroproduto.form.controls.grupo.value,
      Estoque: cadastroproduto.form.controls.estoque.value,
      Status: this.opstatus,
      CodigodeBarras: cadastroproduto.form.controls.codbarra.value,
    })
    this.toastr.success('Sucesso !',"O Dado foi Gravado com Êxito");
    cadastroproduto.form.reset();

  }

  /*função que recebe a key do produto selecionado pelo usuario  */
  recebeselect(chave) {
    this.keyselect = chave;
  }
  /*Editar produtos */

  updateproduto(editarproduto: NgForm) {
    this.listaprodutos.update(this.keyselect,{
      CodProduto: editarproduto.form.controls.codproduto.value,
      Tipo: this.opserpro,
      NomeProdutoServico: editarproduto.form.controls.nomeproduto.value,
      PrecoVenda: editarproduto.form.controls.precovenda.value,
      PrecoCusto: editarproduto.form.controls.precocusto.value,
      Grupo: editarproduto.form.controls.grupo.value,
      Estoque: editarproduto.form.controls.estoque.value,
      Status: this.opstatus,
      CodigodeBarras: editarproduto.form.controls.codbarra.value,
    });
    $('#modal_form_vertical_editar').modal('hide');
    this.toastr.success('Sucesso !', "O dado Foi Editados com Êxito")
  }
  /* Resetar formulario ainda nao esta pronto */
  resetform(cadastroproduto: NgForm) {
    if (cadastroproduto != null) {

    }
  }
  /*Deleta o produto selecionado pelo usuario */
  deletarproduto() {
    this.listaprodutos.remove(this.keyselect);
    $('#modal_theme_danger').modal('hide');
    this.toastr.success('Sucesso !', "O Dado Foi Deletado com Êxito");

  }



}
