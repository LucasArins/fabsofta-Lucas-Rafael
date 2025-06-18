import { Component } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
  providers: [PedidoService, Router]
})
export class PedidoComponent {

  public listaPedidos: Pedido[] = [];

  constructor(
  private pedidoService: PedidoService,
  private router:Router) {}

  ngOnInit() {
    console.log("Carregando pedidos...");
    this.pedidoService.getPedidos().subscribe(pedidos => {
      this.listaPedidos = pedidos;
    });
  }

  novo(){
    this.router.navigate(['pedidos/novo']);
    }
}