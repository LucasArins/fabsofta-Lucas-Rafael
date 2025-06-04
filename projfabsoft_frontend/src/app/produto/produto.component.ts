import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [HttpClientModule,CommonModule, RouterLink],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
  providers: [ProdutoService]
})
export class ProdutoComponent {
  listaProdutos: Produto[] = []

    constructor(private produtoService: ProdutoService) {}

    ngOnInit() {
      console.log("Carregando produtos...");
      this.produtoService.getProdutos().subscribe ( produtos => {
        this.listaProdutos = produtos;
      });
    }
}
