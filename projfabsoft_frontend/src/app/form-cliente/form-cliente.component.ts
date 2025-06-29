import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  imports: [HttpClientModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css',
  providers: [ClienteService, Router]
})
export class FormClienteComponent {

    cliente:Cliente = new Cliente();
    
    constructor(private clienteService: ClienteService, private router: Router,
      private activeRouter: ActivatedRoute
    ) { 
      const id = this.activeRouter.snapshot.paramMap.get('id');
      if (id){
        this.clienteService.getCLienteById(id).subscribe(cliente =>{
          this.cliente = cliente;
        })
      }
      

    }
    salvar () {
        this.clienteService.saveCliente(this.cliente).subscribe( res =>{
            
                 this.router.navigate(['/clientes']);
            },
    )
}}
