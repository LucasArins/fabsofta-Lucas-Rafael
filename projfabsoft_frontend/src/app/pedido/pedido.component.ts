import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-pedido',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
  providers: [PedidoService, Router]
})
export class PedidoComponent {

  public listaPedidos: Pedido[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
        private modal!: bootstrap.Modal;
  
        private pedidoSelecionado!: Pedido;

  constructor(
  private pedidoService: PedidoService,
  private router:Router) {}

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe(resposta => {
      this.listaPedidos = resposta;
    });
  }

  novo(){
    this.router.navigate(['pedidos/novo']);
    }

  alterar(pedido:Pedido){
    this.router.navigate(['pedidos/alterar', pedido.id]);
  }
  abrirConfirmacao(pedido:Pedido) {
    this.pedidoSelecionado = pedido;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }
  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.pedidoService.excluirPedido(this.pedidoSelecionado.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.pedidoService.getPedidos().subscribe(
              pedidos => {
                this.listaPedidos = pedidos;
              }
            );
        },
        error => {
            console.error('Erro ao excluir pedido:', error);
        }
    );
  }
}
