import {FormsModule, NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ToastrService} from 'ngx-toastr';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-conteudo-fluxo',
  templateUrl: './conteudo-fluxo.component.html',
  styleUrls: ['./conteudo-fluxo.component.css']
})
export class ConteudoFluxoComponent implements OnInit {
  listaprodutos: AngularFireList<any>;
  listaclientes: AngularFireList<any>;
  product:Array<any>;
  produtos: Observable<any[]>;
  clientes: Observable<any[]>;
  CodProduto:any;
  CodCliente:any;
  selectproduto:any;

  constructor(
    private angularfire: AngularFireDatabase,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.product = new Array<any>();
    this.listaprodutos = this.angularfire.list('Produtos');
    this.listaclientes = this.angularfire.list('Clientes');

    this.produtos = this.listaprodutos.snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
    this.clientes = this.listaclientes.snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
    

  }
  form_submit(g: NgForm){
    this.product.push({
      /*nome: g.form.controls.products.value,*/
      codCliente: g.form.controls.codcliente.value,
      codProduto: g.form.controls.codproduto.value,
      nomeProduto: this.selectproduto
    });
    g.form.reset();
  }

  

}
