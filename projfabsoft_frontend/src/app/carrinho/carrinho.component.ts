import { Component,ElementRef, ViewChild } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { CarrinhoService } from '../service/carrinho.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-carrinho',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
  providers: [CarrinhoService, Router]
})
export class CarrinhoComponent {
      public listaCarrinho: Carrinho[] = [];

      @ViewChild('myModal') modalElement!: ElementRef;
        private modal!: bootstrap.Modal;
  
        private carrinhoSelecionado!: Carrinho;

    constructor(private carrinhoService: CarrinhoService,
    private router:Router)
     {}

    ngOnInit() {
      console.log("Carregando carrinho...");
      this.carrinhoService.getCarrinho().subscribe(carrinho => {
        this.listaCarrinho = carrinho;
      });
    }
    novo(){
      this.router.navigate(['carrinhos/novo']);
    }
    alterar(carrinho:Carrinho){
          this.router.navigate(['carrinhos/alterar', carrinho.id]);
        }

    abrirConfirmacao(carrinho:Carrinho) {
          this.carrinhoSelecionado = carrinho;
          this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
          this.modal.show();
      }
      
      fecharConfirmacao() {
        this.modal.hide();
      }
confirmarExclusao() {
  this.carrinhoService.excluirCliente(this.carrinhoSelecionado.id).subscribe(
      () => {
          this.fecharConfirmacao();
          this.carrinhoService.getCarrinho().subscribe(
            Carrinho => {
              this.listaCarrinho = Carrinho;
            }
          );
      },
      error => {
          console.error('Erro ao excluir carrinho:', error);
      }
  );
}
}
