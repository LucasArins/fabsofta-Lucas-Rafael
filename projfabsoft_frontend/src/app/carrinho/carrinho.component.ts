import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit, OnDestroy {
  produtosCarrinho: Produto[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private carrinhoService: CarrinhoService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // Subscreve às mudanças do carrinho
    this.subscription.add(
      this.carrinhoService.getProdutosCarrinhoObservable().subscribe((produtos: Produto[]) => {
        this.ngZone.run(() => {
          this.produtosCarrinho = produtos;
          this.cdr.detectChanges();
        });
      })
    );
    
    // Carrega o estado inicial
    this.atualizarCarrinho();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  atualizarCarrinho(): void {
    this.ngZone.run(() => {
      this.produtosCarrinho = this.carrinhoService.getProdutosCarrinho();
      this.cdr.detectChanges();
    });
  }

  remover(produto: Produto): void {
    this.carrinhoService.removerProduto(produto);
  }

  limparTudo(): void {
    this.carrinhoService.limparCarrinho();
  }

  calcularTotal(): number {
    return this.produtosCarrinho.reduce((total, produto) => total + produto.preco, 0);
  }

  getQuantidadeProduto(produto: Produto): number {
    return this.produtosCarrinho.filter(p => p.id === produto.id).length;
  }

  getProdutosUnicos(): Produto[] {
    const produtosUnicos: Produto[] = [];
    this.produtosCarrinho.forEach(produto => {
      if (!produtosUnicos.find(p => p.id === produto.id)) {
        produtosUnicos.push(produto);
      }
    });
    return produtosUnicos;
  }
}
