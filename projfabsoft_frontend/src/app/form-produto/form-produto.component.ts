import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router'; // Importe RouterModule aqui

@Component({
  selector: 'app-form-produto',
  imports: [HttpClientModule, CommonModule, FormsModule, RouterModule], // Adicione RouterModule aqui
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css'],
  providers: [ProdutoService, Router]
})
export class FormProdutoComponent {
  produto: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.getProdutoById(id).subscribe(produto => {
        this.produto = produto;
      });
    }
  }

  salvar() {
    this.produtoService.saveProduto(this.produto)
      .subscribe(() => {
        this.router.navigate(['produtos']);
      });
  }

}
