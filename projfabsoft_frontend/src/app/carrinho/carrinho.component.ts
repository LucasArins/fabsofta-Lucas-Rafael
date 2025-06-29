import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  providers: [CarrinhoService]
})
export class CarrinhoComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.produtos = this.carrinhoService.getProdutosCarrinho();
  }

  remover(produto: Produto) {
    this.carrinhoService.removerProduto(produto);
    this.produtos = this.carrinhoService.getProdutosCarrinho();
  }
}
