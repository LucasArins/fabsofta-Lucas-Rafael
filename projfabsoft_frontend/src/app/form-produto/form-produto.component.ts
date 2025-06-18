import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-produto',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-produto.component.html',
  styleUrl: './form-produto.component.css',
  providers: [ProdutoService, Router]
})
export class FormProdutoComponent {
    produto:Produto = new Produto();

    constructor(
      private produtoService:ProdutoService,
      private router:Router,
      private activeRouter: ActivatedRoute

    ){
      console.log("form alterar");
      const id = this.activeRouter.snapshot.paramMap.get('id');

      if (id) {
        this.produtoService.getProdutoById(id).subscribe(produto =>{
          this.produto = produto;
        });
      }
    }

    salvar(){
      this.produtoService.saveProduto(this.produto)
      .subscribe( res => {
            this.router.navigate(['produtos']);
      });
    }

}
