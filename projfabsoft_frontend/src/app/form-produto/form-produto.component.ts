import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-produto',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css'],
  providers: [ProdutoService]
})
export class FormProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  salvando: boolean = false;
  erroMensagem: string = '';
  sucessoMensagem: string = '';

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      console.log('Carregando produto com ID:', id);
      this.carregarProduto(id);
    }
  }

  carregarProduto(id: string): void {
    this.produtoService.getProdutoById(id).subscribe({
      next: (produto) => {
        console.log('Produto carregado:', produto);
        this.produto = produto;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Erro ao carregar produto:', error);
        this.erroMensagem = 'Erro ao carregar produto. Tente novamente.';
      }
    });
  }

  salvar(): void {
    console.log('Iniciando salvamento do produto:', this.produto);
    
    if (!this.validarProduto()) {
      return;
    }

    this.salvando = true;
    this.erroMensagem = '';
    this.sucessoMensagem = '';
    this.cdr.detectChanges();

    this.produtoService.saveProduto(this.produto).subscribe({
      next: (response) => {
        console.log('Produto salvo com sucesso:', response);
        this.salvando = false;
        this.sucessoMensagem = 'Produto salvo com sucesso!';
        this.cdr.detectChanges();

        // Navega de volta para a lista após 2 segundos
        setTimeout(() => {
          this.router.navigate(['/produtos']);
        }, 2000);
      },
      error: (error) => {
        console.error('Erro ao salvar produto:', error);
        this.salvando = false;
        this.erroMensagem = this.getErrorMessage(error);
        this.cdr.detectChanges();
      }
    });
  }

  private validarProduto(): boolean {
    if (!this.produto.nome || this.produto.nome.trim().length < 2) {
      this.erroMensagem = 'Nome do produto é obrigatório e deve ter pelo menos 2 caracteres.';
      return false;
    }

    if (!this.produto.preco || this.produto.preco <= 0) {
      this.erroMensagem = 'Preço é obrigatório e deve ser maior que zero.';
      return false;
    }

    if (this.produto.quantidadeEstoque < 0) {
      this.erroMensagem = 'Quantidade em estoque não pode ser negativa.';
      return false;
    }

    return true;
  }

  private getErrorMessage(error: any): string {
    if (error.status === 0) {
      return 'Erro de conexão. Verifique se o servidor está rodando.';
    } else if (error.status === 404) {
      return 'Produto não encontrado.';
    } else if (error.status === 400) {
      return 'Dados inválidos. Verifique os campos preenchidos.';
    } else if (error.status === 500) {
      return 'Erro interno do servidor. Tente novamente mais tarde.';
    } else {
      return 'Erro inesperado. Tente novamente.';
    }
  }
}
