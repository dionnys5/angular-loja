import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publico-carrinho',
  templateUrl: './publico-carrinho.component.html',
  styleUrls: ['./publico-carrinho.component.css']
})
export class PublicoCarrinhoComponent implements OnInit {

  produtosCarrinho = null;
  qtProduto = null;
  constructor() { }

  ngOnInit() {
    this.atualizaProdutosCarrinho();
  }

  getCarrinho() {
      const localStorageCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
      if (localStorageCarrinho == null) {
          return [];
      } else {
          return localStorageCarrinho.produtosCarrinho;
      }
  }

  atualizaProdutosCarrinho() {
    this.produtosCarrinho = this.getCarrinho();
  }

  excluirItemCarrinho(item) {
    this.produtosCarrinho.splice(this.produtosCarrinho.indexOf(item), 1);
    this.setCarrinho(this.produtosCarrinho);
  }

  setCarrinho(produtosCarrinho) {
    localStorage.setItem('produtosCarrinho', JSON.stringify({produtosCarrinho}));
  }

}
