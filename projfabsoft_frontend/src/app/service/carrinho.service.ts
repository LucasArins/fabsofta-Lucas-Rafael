import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  apiURL = "http://localhost:8080/ap1/v1/carrinho";
  constructor(private http:HttpClient) { }

  getCarrinho(){
    return this.http.get<Carrinho[]>(this.apiURL);
  }

  saveCarrinho(carrinho:Carrinho){
    if (carrinho.id){
      return this.http.put(this.apiURL + '/' + carrinho.id, carrinho);
    }
    return this.http.post(this.apiURL,carrinho);
  }
  
  getCarrinhoById(id: any){
    return this.http.get<Carrinho>(this.apiURL + '/' + id);
  }
}