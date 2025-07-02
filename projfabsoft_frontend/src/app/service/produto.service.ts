import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiURL = "http://localhost:8080/api/v1/produto";
  
  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProdutoById(id: any): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiURL}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  saveProduto(produto: Produto): Observable<any> {
    console.log('Salvando produto:', produto);
    
    if (produto.id) {
      return this.http.put(`${this.apiURL}/${produto.id}`, produto)
        .pipe(
          catchError(this.handleError)
        );
    } else {
      return this.http.post(this.apiURL, produto)
        .pipe(
          catchError(this.handleError)
        );
    }
  }

  excluirProduto(id: any): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro na API:', error);
    
    if (error.status === 0) {
      console.error('Erro de conexão. Verifique se o backend está rodando em:', error.url);
    } else {
      console.error(`Backend retornou código ${error.status}, mensagem:`, error.error);
    }
    
    return throwError(() => new Error('Erro ao comunicar com o servidor. Tente novamente.'));
  }
}
