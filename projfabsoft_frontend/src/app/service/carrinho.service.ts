import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private produtos: Produto[] = [];

  adicionarProduto(produto: Produto) {
    // Adiciona o produto ao array, permitindo duplicatas
    this.produtos.push(produto);
    console.log('Produto adicionado ao carrinho:', produto);
    console.log('Estado atual do carrinho:', this.produtos);
  }

  getProdutosCarrinho(): Produto[] {
    // Retorna todos os produtos no carrinho
    return this.produtos;
  }

  removerProduto(produto: Produto) {
    // Remove apenas a primeira ocorrência do produto
    const index = this.produtos.indexOf(produto);
    if (index > -1) {
      this.produtos.splice(index, 1);
    }
    console.log('Produto removido do carrinho:', produto);
    console.log('Estado atual do carrinho:', this.produtos);
  }

  limparCarrinho() {
    // Limpa todos os produtos do carrinho
    this.produtos = [];
    console.log('Carrinho limpo.');
  }
}
