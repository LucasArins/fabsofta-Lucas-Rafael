import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

import { Produto } from '../model/produto';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-form-pedido',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css',
  providers: [PedidoService, Router, ClienteService]
})
export class FormPedidoComponent {
    pedido: Pedido = new Pedido();

    produto: Produto = new Produto();
    @ViewChild('myModalProduto') modalElementProduto!: ElementRef;
    private modalProduto!: bootstrap.Modal;

    public listaClientes:Cliente[] = []; //INCLUIR AQUI
    private produtoEditando: Produto | null = null; // Variável para armazenar o produto sendo editado

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
        .subscribe(res => {
            this.router.navigate(['pedidos']);
        });
    }

    comparaClientes(obj1: Cliente, obj2: Cliente): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }

    incluirProduto() {
        this.produto = new Produto();
        this.modalProduto = new bootstrap.Modal(this.modalElementProduto.nativeElement);
        this.modalProduto.show();
    }
    salvaProduto(): void {
        if (!this.pedido.produtosTrocados) {
            this.pedido.produtosTrocados = [];
        }
        if (this.produtoEditando) {
            // Atualiza os campos do produto existente
            Object.assign(this.produtoEditando, this.produto);
        } else {
            // Adiciona novo produto
            this.pedido.produtosTrocados.push(this.produto);
        }
        this.modalProduto.hide();
    }

    editarProduto(produto: Produto) {
        // Referencia o produto existente para edição
        this.produtoEditando = produto;
        this.produto = { ...produto }; // Cópia para edição no modal
        this.modalProduto.show();
    }
    excluirProduto(produto: Produto) {
        const index = this.pedido.produtosTrocados.indexOf(produto);
        if (index > -1) {
            this.pedido.produtosTrocados.splice(index, 1);
        }
    }
    fecharConfirmacaoProduto() {
        this.modalProduto.hide();
        this.produto = new Produto(); // Limpa o produto após fechar o modal
        this.produtoEditando = null; // Reseta a edição
    }
}