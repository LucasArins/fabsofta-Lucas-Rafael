import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cliente',
  
  imports: [HttpClientModule,CommonModule, Router],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  providers: [ClienteService]
})
export class ClienteComponent {
  listaClientes: Cliente[] = [];
  router: any;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    console.log("Carregando clientes...");
    this.clienteService.getClientes().subscribe(clientes => {
      this.listaClientes = clientes;
    });
   
  }
  alterar(cliente:Cliente){
    this.router.navigate(['clientes/alterar', cliente.id]);
  }
}    