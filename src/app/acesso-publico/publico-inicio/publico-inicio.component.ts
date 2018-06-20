import { Component, OnInit } from '@angular/core';
import {ProdutosService} from '../../shared/produtos.service';

@Component({
  selector: 'app-publico-inicio',
  templateUrl: './publico-inicio.component.html',
  styleUrls: ['./publico-inicio.component.css']
})
export class PublicoInicioComponent implements OnInit {
  produtos = null;
  nome: string;
  carrinho = null;
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.todosProdutos()
        .subscribe(produtos => {
          this.produtos = produtos;
        }, () =>
        alert('Erro ao carregar produtos')
        );
    this.carrinho = this.getCarrinho();
  }

  addCarrinho(produto) {
      this.carrinho = this.getCarrinho();
      for (let p of this.carrinho) {
          if (p.produto.id === produto.id) {
              alert('Produto já está no carrinho!');
              return;
          }
      }
      this.carrinho.push({'produto':produto,'quantidade':1});
      this.setCarrinho(this.carrinho);
      alert('Produto Adicionado ao carrinho!');
  }

  setCarrinho(produtosCarrinho) {
      localStorage.setItem('produtosCarrinho', JSON.stringify({produtosCarrinho}));
  }

  getCarrinho() {
      const localStorageCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
      if (localStorageCarrinho == null) {
          return [];
      } else {
          return localStorageCarrinho.produtosCarrinho;
      }
  }
}
