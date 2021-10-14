import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from "./produtos/produtos.component";
import { CarrinhoComprasComponent } from "./carrinho-compras/carrinho-compras.component";

//criando as rotas para acessar cada componente
const routes: Routes = [
    {
        path: '', //raiz do projeto
        component: ProdutosComponent
    },
    {
        path: 'carrinho-compras', //caminho da rota
        component: CarrinhoComprasComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }