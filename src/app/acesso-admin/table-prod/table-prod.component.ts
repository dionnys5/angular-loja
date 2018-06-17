import { Component, OnInit } from '@angular/core';
import {ProdutosService} from '../../shared/produtos.service';

@Component({
  selector: 'app-table-prod',
  templateUrl: './table-prod.component.html',
  styleUrls: ['./table-prod.component.css']
})
export class TableProdComponent implements OnInit {
  produtos: any;
  lista_status = null;
  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.atualizarProdutos();
  }
  atualizarProdutos() {
    this.produtosService.todosProdutos()
        .subscribe(produtos => {
          this.produtos = produtos;
          this.lista_status = true;
        }, () =>
          alert('Erro ao carregar produtos')
        );
  }
}
