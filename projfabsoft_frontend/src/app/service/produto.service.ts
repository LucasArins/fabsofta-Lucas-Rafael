import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiURL = "http://localhost:8080/ap1/v1/produto";
  constructor(private http: HttpClient) { }


  getProdutos() {
    return this.http.get<Produto[]>(this.apiURL);
  }


  getProdutoById(id: any) {
    return this.http.get<Produto>(this.apiURL + '/' + id);
  }

  saveProduto(produto: Produto) {
    if (produto.id) {
      return this.http.put(this.apiURL + '/' + produto.id, produto);
    }
    return this.http.post(this.apiURL, produto);
  }
  excluirProduto(id: any) {
    return this.http.delete<Produto>(this.apiURL + '/' + id);
  }
}
