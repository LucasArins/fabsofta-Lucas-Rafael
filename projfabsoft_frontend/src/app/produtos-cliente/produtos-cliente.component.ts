import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produtos-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
    const clienteId = 1; // Substitua pelo id do cliente logado, se houver autenticação
    this.carrinhoService.adicionarProdutoAoCarrinho(produto, clienteId).subscribe(() => {
      alert('Produto adicionado ao carrinho!');
    });
  }
}
