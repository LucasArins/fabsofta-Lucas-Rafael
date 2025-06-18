import { Component } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pedido',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css',
  providers: [PedidoService, Router]
})
export class FormPedidoComponent {
    pedido: Pedido = new Pedido();

    constructor(
      private pedidoService:PedidoService,
      private router:Router
    ){}

    salvar(){
      this.pedidoService.savePedido(this.pedido)
        .subscribe(resultado => {
            this.router.navigate(['pedidos']);
        });
    }
}