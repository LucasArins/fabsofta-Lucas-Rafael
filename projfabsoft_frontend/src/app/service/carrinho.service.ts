import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  apiURL = "http://localhost:8080/ap1/v1/carrinho";
  constructor(private http:HttpClient) { }
 
  getCarrinhos(){
      return this.http.get<Carrinho[]>(this.apiURL);
    }
}
