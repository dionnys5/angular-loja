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
  produtosCarrinho = [];
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.todosProdutos()
        .subscribe(produtos => {
          this.produtos = produtos;
        }, () =>
        alert('Erro ao carregar produtos')
        );
    this.atualizaCarrinho();
  }

  addCarrinho(produto) {
      this.atualizaCarrinho();
      this.produtosCarrinho.push(produto);
      this.setCarrinho(this.produtosCarrinho);
      alert('Produto Adicionado ao carrinho!');
  }

  atualizaCarrinho() {
      this.produtosCarrinho = this.getCarrinho();
  }

  setCarrinho(produtos) {
      localStorage.setItem('produtosCarrinho', JSON.stringify({produtos}));
  }

  getCarrinho() {
      const localStorageCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
      if (localStorageCarrinho == null) {
          return [];
      } else {
          return localStorageCarrinho.produtos;
      }
  }
}
