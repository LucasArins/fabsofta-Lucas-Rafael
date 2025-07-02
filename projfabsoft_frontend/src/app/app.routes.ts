import { RouterModule,Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { FormAdminstradorComponent } from './form-adminstrador/form-adminstrador.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutosClienteComponent } from './produtos-cliente/produtos-cliente.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'clientes/novo', component: FormClienteComponent },
    { path: 'clientes/alterar/:id', component: FormClienteComponent },
    { path: 'administradores', component: AdministradorComponent },
    { path: 'administradores/novo', component: FormAdminstradorComponent },
    { path: 'administradores/alterar/:id', component: FormAdminstradorComponent },
    { path: 'produtos', component: ProdutoComponent },
    { path: 'produtos/novo', component: FormProdutoComponent },
    { path: 'produtos/alterar/:id', component: FormProdutoComponent },
    { path: 'produtos-cliente', component: ProdutosClienteComponent },
    { path: 'carrinho', component: CarrinhoComponent }
];
