import { Component } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { CarrinhoService } from '../service/carrinho.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
  providers: [CarrinhoService, Router]
})
export class CarrinhoComponent {
  listaCarrinho: Carrinho[] = []

    constructor(private carrinhoService: CarrinhoService,
    private router:Router)
     {}

    ngOnInit() {
      console.log("Carregando carrinho...");
      this.carrinhoService.getCarrinho().subscribe(carrinho => {
        this.listaCarrinho = carrinho;
      });
    }
    novo(){
      this.router.navigate(['carrinhos/novo']);
    }
    alterar(carrinho:Carrinho){
          this.router.navigate(['carrinhos/alterar', carrinho.id]);
        }
}

