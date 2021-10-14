import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';
 
@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {
 
  //armazenar os itens do carrinho de compras
  dados: any = {};
 
  constructor(
    //inicialização automatica feita pelo angular..
    private carrinhoComprasService: CarrinhoComprasService //injeção de dependência
  ) { }
 
  ngOnInit(): void {
    //trazer todos os itens contidos no carrinho de compras
    this.dados = this.carrinhoComprasService.obterCarrinhoDeCompras();
  }
 
  limpar(): void {
    this.carrinhoComprasService.limparCarrinho();
    this.ngOnInit();
  }
 
}
