import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';


@Component({
  selector: 'app-cliente',
  imports: [],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  public listaClientes:Cliente[]=[];
  constructor(
    private ClienteService:ClienteService
  ){}
ngOnInit(): void{
  this.ClienteService.getClientes().subscribe(resposta =>{
    this.listaClientes=resposta;
  })
}
}
