import { Injectable } from '@angular/core';
import { Administrador } from '../model/administrador';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  apiURL = "http://localhost:8080/ap1/v1/administrador";
  constructor(private http:HttpClient) { }

  getAdministradores() {
    return this.http.get<Administrador[]>(this.apiURL);
  }
  saveAdministrador(administrador: Administrador) {
    if (administrador.id) {
      return this.http.put(this.apiURL + '/' + administrador.id, administrador);
    }
    return this.http.post(this.apiURL, administrador);
  }
  getAdministradorById(id: any) {
    return this.http.get<Administrador>(this.apiURL + '/' + id);
  }
  excluirAdministrador(id: any) {
    return this.http.delete<Administrador>(this.apiURL + '/' + id);
  }
}
