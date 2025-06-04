import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
export const routes: Routes = [
    { path: 'produtos', component: ProdutoComponent },
    { path: 'carrinhos', component: CarrinhoComponent}
];
