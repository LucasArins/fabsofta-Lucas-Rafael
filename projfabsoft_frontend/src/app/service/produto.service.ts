import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiURL= "http://localhost:8080/ap1/v1/produto";
  constructor(private http:HttpClient) { }

  getProdutos(){
    return this.http.get<Produto[]>(this.apiURL);
  }
  saveProduto(produto:Produto){
    return this.http.post(this.apiURL,produto);
  }
}
