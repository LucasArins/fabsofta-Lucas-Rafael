import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private produtos: Produto[] = [];
  private apiURL = 'sua_api_url_aqui'; // Adicione a URL da sua API aqui

  constructor(private http: HttpClient) { }

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  getProdutosCarrinho(): Produto[] {
    return this.produtos;
  }

  removerProduto(produto: Produto) {
    this.produtos = this.produtos.filter(p => p !== produto);
  }

  adicionarProdutoAoCarrinho(produto: Produto, clienteId: number) {
    // Monte o objeto carrinho conforme esperado pelo backend
    const carrinho = {
      cliente: { id: clienteId },
      produtos: [produto]
    };
    return this.http.post(this.apiURL, carrinho);
  }
}
