import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publico-carrinho',
  templateUrl: './publico-carrinho.component.html',
  styleUrls: ['./publico-carrinho.component.css']
})
export class PublicoCarrinhoComponent implements OnInit {

  carrinho = null;
  qtProduto = null;
  constructor() { }

  ngOnInit() {
    this.carrinho = this.getCar();
  }

    getCar() {
      const localStorageCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
      if (localStorageCarrinho == null) {
          return [];
      } else {
          return localStorageCarrinho.produtosCarrinho;
      }
  }

  excluirItemCar(item) {
    this.carrinho.splice(this.carrinho.indexOf(item), 1);
    this.setCarrinho(this.carrinho);
  }

  setCarrinho(produtosCarrinho) {
    localStorage.setItem('produtosCarrinho', JSON.stringify({produtosCarrinho}));
  }

}
