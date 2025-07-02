import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  apiURL = "http://localhost:8080/ap1/v1/pedido";
  
  constructor(private http:HttpClient) { }

  getPedidos(){
    return this.http.get<Pedido[]>(this.apiURL);
  }

  savePedido(pedido:Pedido){
    if (pedido.id){
      return this.http.put(this.apiURL + '/' + pedido.id, pedido);
    }
    return this.http.post(this.apiURL,pedido);
  }
  getPedidoById(id: any){
    return this.http.get<Pedido>(this.apiURL + '/' + id);
  }
  excluirPedido(id: any){
    return this.http.delete<Pedido>(this.apiURL + '/' + id);
  }
}