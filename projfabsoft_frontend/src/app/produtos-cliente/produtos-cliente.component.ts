import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produtos-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './produtos-cliente.component.html',
  styleUrls: ['./produtos-cliente.component.css'],
  providers: [ProdutoService]
})
export class ProdutosClienteComponent implements OnInit, OnDestroy {
  listaProdutos: Produto[] = [];
  produtoAdicionado: string = '';
  carrinhoCount: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(
    private produtoService: ProdutoService,
    public carrinhoService: CarrinhoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Carrega produtos
    this.produtoService.getProdutos().subscribe((produtos: Produto[]) => {
      this.listaProdutos = produtos;
      this.cdr.detectChanges();
    });

    // Subscreve às mudanças do carrinho
    this.subscription.add(
      this.carrinhoService.getProdutosCarrinhoObservable().subscribe(produtos => {
        this.carrinhoCount = produtos.length;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionarProduto(produto);
    this.produtoAdicionado = produto.nome;
    this.cdr.detectChanges();
    
    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      this.produtoAdicionado = '';
      this.cdr.detectChanges();
    }, 3000);
  }

  getQuantidadeNoCarrinho(produto: Produto): number {
    return this.carrinhoService.getProdutosCarrinho().filter(p => p.id === produto.id).length;
  }
}
