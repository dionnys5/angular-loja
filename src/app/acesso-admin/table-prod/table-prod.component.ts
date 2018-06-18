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
  cadastrar = null;
  deletar_ok = null;
  salvar_ok = null;

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

  excluirProduto(produto) {
      if (confirm('Tem certeza que deseja excluir esse produto?')) {
          this.produtosService.deletarProduto(produto)
              .subscribe(
                  () => {
                      this.deletar_ok = true;
                      this.atualizarProdutos();
                  }, () => alert('Não foi possivel deleter o produto')
              );
      }
  }

  novoProduto(){
      this.atualizarProdutos();
      this.salvar_ok = true;
  }

  limparTudo() {
      this.cadastrar = null;
      this.deletar_ok = null;
  }
}
