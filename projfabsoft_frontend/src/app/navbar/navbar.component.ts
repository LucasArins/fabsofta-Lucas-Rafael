import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarrinhoService } from '../service/carrinho.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  carrinhoCount: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(
    public carrinhoService: CarrinhoService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // Subscreve às mudanças do carrinho
    this.subscription.add(
      this.carrinhoService.getProdutosCarrinhoObservable().subscribe(produtos => {
        this.ngZone.run(() => {
          this.carrinhoCount = produtos.length;
          this.cdr.detectChanges();
        });
      })
    );
    
    // Carrega o estado inicial
    this.carrinhoCount = this.carrinhoService.getQuantidadeTotal();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCarrinhoCount(): number {
    return this.carrinhoCount;
  }
}
