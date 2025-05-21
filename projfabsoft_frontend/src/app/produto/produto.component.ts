import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

    public listaProdutos:Produto[] = [];
    constructor(
      private produtoService:ProdutoService
    ){}

    ngOnInit(): void {
      this.produtoService.getProduto().subscribe ( resposta => {
        this.listaProdutos = resposta;
      })

    }
}
