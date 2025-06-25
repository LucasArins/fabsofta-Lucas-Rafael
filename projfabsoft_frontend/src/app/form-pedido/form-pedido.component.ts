import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-form-pedido',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css',
  providers: [PedidoService, Router, ClienteService]
})
export class FormPedidoComponent {
    pedido: Pedido = new Pedido();

    public listaClientes:Cliente[] = []; //INCLUIR AQUI

    constructor(
      private pedidoService:PedidoService,
      private clienteService: ClienteService, //INCLUIR AQUI
      private router:Router,
      private activeRouter: ActivatedRoute //ALTERADO
    ){

    const id = this.activeRouter.snapshot.paramMap.get('id');
    //INCLUIR AQUI
    this.clienteService.getClientes().subscribe(clientes => {
      this.listaClientes = clientes;
    });
     

    if (id) {
      this.pedidoService.getPedidoById(id).subscribe(pedido => {
        this.pedido = pedido;
  });
//ALTERADO
     } 
    }

    salvar(){
      this.pedidoService.savePedido(this.pedido)
        .subscribe(resultado => {
            this.router.navigate(['pedidos']);
        });
    }

    comparaClientes(obj1: Cliente, obj2: Cliente): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }
}