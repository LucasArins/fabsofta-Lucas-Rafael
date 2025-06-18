import { Component, ElementRef, ViewChild } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-produto',
  imports: [HttpClientModule,CommonModule, ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
  providers: [ProdutoService]
})
export class ProdutoComponent {


      public listaProdutos: Produto[] = [];

      @ViewChild('myModal') modalElement!: ElementRef;
      private modal!: bootstrap.Modal;

      private produtoSelecionado!: Produto;

    constructor(
      private produtoService: ProdutoService,
      private router:Router) {}

    ngOnInit(): void {
      this.produtoService.getProdutos().subscribe ( produtos => {
        this.listaProdutos = produtos;
      });
    }

    novo(){
      this.router.navigate(['produtos/novo']);
    }
    alterar(produto:Produto){
      console.log("alterar");
      this.router.navigate(['produtos/alterar', produto.id]);
    }

    abrirConfirmacao(produto:Produto) {
      this.produtoSelecionado = produto;
      this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
      this.modal.show();
  }
  
  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.produtoService.excluirCliente(this.produtoSelecionado.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.produtoService.getProdutos().subscribe(
              Produto => {
                this.listaProdutos = Produto;
              }
            );
        },
        error => {
            console.error('Erro ao excluir produto:', error);
        }
    );
}
}
