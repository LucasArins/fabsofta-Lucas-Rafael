import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  apiURL = "http://localhost:8080/ap1/v1/Administrador";  
  constructor(private http:HttpClient) { }
  getadministradores (){
    return this.http.get<Cliente[]>(this.apiURL);
  }
  saveAdministrador(administrador: Cliente) {
    if(administrador.id)
      return this.http.put(this.apiURL + '/' + administrador.id, administrador);
    return this.http.post<Cliente>(this.apiURL, administrador);
  }
  getAdministradorById(id: any) {
    return this.http.get<Cliente>(this.apiURL + "/" + id);
  }
  excluirAdministrador(id: any){
    return this.http.delete<Cliente>(this.apiURL + '/' + id);
  }
}
