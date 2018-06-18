import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  clientes = [];
  constructor() 
  {    
      let item = {
        id : '1',
        nome: "Thaís",
        cpf : "99999999900",
        telefone : "31 998515217",
        status : "ATIVO"
      };
      for(var i = 0; i < 10; i++)
      {
        this.clientes.push(item);
      }

   }

  ngOnInit() {
  }
}
