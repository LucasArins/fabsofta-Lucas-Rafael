import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private produtos: Produto[] = [];

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  getProdutosCarrinho(): Produto[] {
    return this.produtos;
  }

  removerProduto(produto: Produto) {
    this.produtos = this.produtos.filter(p => p !== produto);
  }
}
