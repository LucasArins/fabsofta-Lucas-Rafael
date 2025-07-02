import { Component } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { CarrinhoService } from '../service/carrinho.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-produto',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-carrinho.component.html',
  styleUrl: './form-carrinho.component.css',
  providers: [CarrinhoService, Router]
})
export class FormCarrinhoComponent {
    carrinho:Carrinho = new Carrinho();

    constructor(
      private carrinhoService:CarrinhoService,
      private router:Router,
      private activeRouter: ActivatedRoute
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');

      if (id) {
        this.carrinhoService.getCarrinhoById(id).subscribe(carrinho =>{
          this.carrinho = carrinho;
        });
      }
    }

    salvar(){
      this.carrinhoService.saveCarrinho(this.carrinho)
      .subscribe( res => {
            this.router.navigate(['carrinhos']);
      });
    }

}
