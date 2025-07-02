
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-produtos-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './produtos-cliente.component.html',
  styleUrls: ['./produtos-cliente.component.css'],
  providers: [ProdutoService]
})
export class ProdutosClienteComponent implements OnInit {
  listaProdutos: Produto[] = [];
  produtoAdicionado: string = '';

  constructor(
    private produtoService: ProdutoService,
    public carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.listaProdutos = produtos;
    });
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionarProduto(produto);
    this.produtoAdicionado = produto.nome;
    
    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      this.produtoAdicionado = '';
    }, 3000);
  }

  getQuantidadeNoCarrinho(produto: Produto): number {
    return this.carrinhoService.getProdutosCarrinho().filter(p => p.id === produto.id).length;
  }
}

