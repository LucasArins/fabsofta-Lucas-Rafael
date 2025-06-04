import { Component } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { CarrinhoService } from '../service/carrinho.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
  providers: [CarrinhoService]
})
export class CarrinhoComponent {
  listaCarrinho: Carrinho[] = []

    constructor(private carrinhoService: CarrinhoService) {}

    ngOnInit() {
      console.log("Carregando carrinho...");
      this.carrinhoService.getCarrinhos().subscribe(carrinho => {
        this.listaCarrinho = carrinho;
      });
    }

}

