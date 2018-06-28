import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
declare var $:any;

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  listaclientes: AngularFireList<any>;
  opstatus: any;
  opestado: any;
  clientes: Observable<any[]>;
  keyselect: any;
  constructor(
    private angularfire: AngularFireDatabase,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.listaclientes = this.angularfire.list('Clientes');

    this.clientes = this.listaclientes.snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));


  }

  createcliente(cadastrocliente:NgForm){
    this.angularfire.list("Clientes").push({
      CodigoCliente: cadastrocliente.form.controls.codproduto.value,
      NomeRazao: cadastrocliente.form.controls.nome.value,
      CpfCnpj:cadastrocliente.form.controls.cpf.value,
      Telefone:cadastrocliente.form.controls.nome.value,
      Celular:cadastrocliente.form.controls.celular.value,
      Email:cadastrocliente.form.controls.email.value,
      Cep:cadastrocliente.form.controls.cep.value,
      Logradouro:cadastrocliente.form.controls.rua.value,
      Numero:cadastrocliente.form.controls.numerocasa.value,
      Bairro:cadastrocliente.form.controls.bairrocasa.value,
      Cidade:cadastrocliente.form.controls.cidade.value,
      Estado:this.opestado,
      Status:this.opstatus,

    });
    this.toastr.success('Sucesso!',"Os Dados Foram Gravados com Êxito");
    cadastrocliente.form.reset();
  }
  recebeselect(chave) {
    this.keyselect = chave;
    
  }
  deletarcliente() {
    this.listaclientes.remove(this.keyselect);
    $('#modal_theme_danger').modal('hide');
    this.toastr.success('Sucesso !', "O Dado Foi Deletado com Êxito");

  }
  updatecliente(editarcliente:NgForm){
    this.listaclientes.update(this.keyselect,{
      CodigoCliente: editarcliente.form.controls.codproduto.value,
      NomeRazao: editarcliente.form.controls.nome.value,
      CpfCnpj:editarcliente.form.controls.cpf.value,
      Telefone:editarcliente.form.controls.nome.value,
      Celular:editarcliente.form.controls.celular.value,
      Email:editarcliente.form.controls.email.value,
      Cep:editarcliente.form.controls.cep.value,
      Logradouro:editarcliente.form.controls.rua.value,
      Numero:editarcliente.form.controls.numerocasa.value,
      Bairro:editarcliente.form.controls.bairrocasa.value,
      Cidade:editarcliente.form.controls.cidade.value,
      Estado:this.opestado,
      Status:this.opstatus,

    });
    $('#modal_form_vertical_editar').modal('hide');
    this.toastr.success('Sucesso !', "O dado Foi Editados com Êxito")
  }

  
}
