import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-produtos-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './produtos-cliente.component.html',
  styleUrls: ['./produtos-cliente.component.css'],
  providers: [ProdutoService, CarrinhoService]
})
export class ProdutosClienteComponent implements OnInit {
  listaProdutos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(produtos => {
      this.listaProdutos = produtos;
    });
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarProduto(produto);
    alert('Produto adicionado ao carrinho!');
  }
}
