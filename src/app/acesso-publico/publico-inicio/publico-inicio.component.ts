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
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.todosProdutos()
        .subscribe(produtos => {
          this.produtos = produtos;
        }, () =>
        alert('Erro ao carregar produtos')
        );
  }

}
