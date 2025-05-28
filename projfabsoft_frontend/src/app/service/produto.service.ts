import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiURL= "https://localhost:8080/ap1/v1/produtos";
  constructor(private http:HttpClient) { }

  getProdutos(){
    return this.http.get<Produto[]>(this.apiURL);
  }
}
