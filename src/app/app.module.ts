import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';

import { AppRoutingModule } from './app.routing';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CarrinhoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
