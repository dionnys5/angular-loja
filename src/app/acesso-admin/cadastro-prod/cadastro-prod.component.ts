import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Produto} from '../produto.model';
import {ProdutosService} from '../../shared/produtos.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-prod',
  templateUrl: './cadastro-prod.component.html',
  styleUrls: ['./cadastro-prod.component.css']
})
export class CadastroProdComponent implements OnInit {
  id = null;
  nome: string;
  categoria: string;
  preco: number;
  img: string;
  produto = new Produto(this.nome, this.preco, this.categoria, this.img);
  salvar_ok = null;

  @Output()
  onSalvar = new EventEmitter();

  @Output()
  onCancelar = new EventEmitter();

  @Output()
  onEditar = new EventEmitter();

  constructor(
      private produtoService: ProdutosService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      console.log(this.id);
      if (this.id) {
          this.produtoService.getProduto(this.id)
              .subscribe(produto => {
                  this.nome = produto.nome;
                  this.preco = produto.preco;
                  this.categoria = produto.categoria;
                  this.img = produto.img;
              });
      }
  }

  salvarProduto() {
    this.produto.nome = this.nome;
    this.produto.preco = this.preco;
    this.produto.categoria = this.categoria;
    this.produto.img = this.img;
    if (this.id) {
        this.produtoService.editarProduto(this.id, this.produto)
            .subscribe(
                produto => {
                    this.onEditar.emit(produto);
                    this.router.navigate(['admin/inicio']);
                }, () => alert('Não foi possivel editar este produto!')
            );
    } else {
        this.produtoService.salvarProduto(this.produto)
            .subscribe(
                produto => {
                    this.salvar_ok = true;
                    this.onSalvar.emit(null);
                    this.limparTudo();
                }, () =>
                    alert('Erro ao cadastrar produto')
            );
    }
  }

  limparTudo() {
      this.nome = null;
      this.preco = null;
      this.categoria = null;
      this.img = null;
      this.router.navigate(['admin/inicio']);
  }
}
