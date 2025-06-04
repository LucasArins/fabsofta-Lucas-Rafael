import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { FormCarrinhoComponent } from './form-carrinho/form-carrinho.component'

export const routes: Routes = [
    { path: 'produtos', component: ProdutoComponent },
    { path: 'produtos/novo', component: FormProdutoComponent},
    { path: 'carrinhos', component: CarrinhoComponent},
];
