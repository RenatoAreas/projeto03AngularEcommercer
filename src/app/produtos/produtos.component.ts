import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto.model';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';
 
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
 
  //atributos
  produtos: Produto[] = [];
  itemProduto: Produto = {
    idProduto: 0, nome : '', preco: 0, quantidade: 0, descricao: '', foto: ''
  };
 
  constructor(
    private carrinhoComprasService: CarrinhoComprasService, //injeção de dependência
    private produtoService: ProdutoService //injeção de dependência
  ) { }
 
  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }
 
  obterProduto(item: Produto): void {
    this.itemProduto = item;
  }
 
  adicionarProduto(item: Produto): void {
    this.carrinhoComprasService.adicionarItem(item);
    alert(`Produto '${item.nome}' \nadicionado ao carrinho de compras com sucesso!`);
  }
 
}
