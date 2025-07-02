import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtosCarrinho: Produto[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.atualizarCarrinho();
  }

  atualizarCarrinho(): void {
    this.produtosCarrinho = this.carrinhoService.getProdutosCarrinho();
  }

  remover(produto: Produto): void {
    this.carrinhoService.removerProduto(produto);
    this.atualizarCarrinho();
  }

  limparTudo(): void {
    this.carrinhoService.limparCarrinho();
    this.atualizarCarrinho();
  }

  calcularTotal(): number {
    return this.produtosCarrinho.reduce((total, produto) => total + produto.preco, 0);
  }

  getQuantidadeProduto(produto: Produto): number {
    return this.produtosCarrinho.filter(p => p.id === produto.id).length;
  }

  getProdutosUnicos(): Produto[] {
    const produtosUnicos: Produto[] = [];
    this.produtosCarrinho.forEach(produto => {
      if (!produtosUnicos.find(p => p.id === produto.id)) {
        produtosUnicos.push(produto);
      }
    });
    return produtosUnicos;
  }
}
