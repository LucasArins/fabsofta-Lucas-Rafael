import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [HttpClientModule,CommonModule, ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
  providers: [ProdutoService]
})
export class ProdutoComponent {


      public listaProdutos: Produto[] = []

    constructor(
      private produtoService: ProdutoService,
      private router:Router) {}

    ngOnInit(): void {
      this.produtoService.getProdutos().subscribe ( produtos => {
        this.listaProdutos = produtos;
      });
    }

    novo(){
      this.router.navigate(['produtos/novo']);
    }
    alterar(produto:Produto){
      console.log("alterar");
      this.router.navigate(['produtos/alterar', produto.id]);
    }
}
