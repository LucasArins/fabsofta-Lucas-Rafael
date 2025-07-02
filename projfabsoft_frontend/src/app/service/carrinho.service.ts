import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private produtos: Produto[] = [];
  private produtosSubject = new BehaviorSubject<Produto[]>([]);

  constructor() {}

  adicionarProduto(produto: Produto): void {
    // Adiciona o produto ao array, permitindo duplicatas
    this.produtos.push(produto);
    this.notificarMudancas();
    console.log('Produto adicionado ao carrinho:', produto);
    console.log('Estado atual do carrinho:', this.produtos);
  }

  getProdutosCarrinho(): Produto[] {
    // Retorna todos os produtos no carrinho
    return [...this.produtos]; // Retorna uma cópia para evitar mutações externas
  }

  getProdutosCarrinhoObservable(): Observable<Produto[]> {
    return this.produtosSubject.asObservable();
  }

  removerProduto(produto: Produto): void {
    // Remove apenas a primeira ocorrência do produto
    const index = this.produtos.indexOf(produto);
    if (index > -1) {
      this.produtos.splice(index, 1);
      this.notificarMudancas();
    }
    console.log('Produto removido do carrinho:', produto);
    console.log('Estado atual do carrinho:', this.produtos);
  }

  limparCarrinho(): void {
    // Limpa todos os produtos do carrinho
    this.produtos = [];
    this.notificarMudancas();
    console.log('Carrinho limpo.');
  }

  getQuantidadeTotal(): number {
    return this.produtos.length;
  }

  private notificarMudancas(): void {
    // Notifica todos os observadores sobre mudanças
    this.produtosSubject.next([...this.produtos]);
  }
}

