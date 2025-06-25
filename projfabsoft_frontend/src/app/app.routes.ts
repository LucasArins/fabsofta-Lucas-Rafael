import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { FormCarrinhoComponent } from './form-carrinho/form-carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';
import { FormPedidoComponent} from './form-pedido/form-pedido.component'

export const routes: Routes = [
    { path: 'produtos', component: ProdutoComponent },
    { path: 'produtos/novo', component: FormProdutoComponent},
    { path: 'produtos/alterar/:id', component: FormProdutoComponent},
    
    { path: 'carrinhos', component: CarrinhoComponent},
    { path: 'carrinhos/novo', component: FormCarrinhoComponent},
    { path: 'carrinhos/alterar/:id', component: FormCarrinhoComponent},
    
    { path: 'pedidos', component: PedidoComponent},
    { path: 'pedidos/novo', component: FormPedidoComponent},
    { path: 'pedidos/alterar/:id', component: FormPedidoComponent},
];
