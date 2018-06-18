import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produto} from '../acesso-admin/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  URL_API = 'http://localhost:3000';
  produtos = null;

  constructor(private http: HttpClient) { }

  getProduto(id: number): Observable<any> {
      return this.http.get(this.URL_API + '/produtos/' + id);
  }

  todosProdutos() {
      return this.http.get(this.URL_API + '/produtos');
  }

  salvarProduto(produto) {
      return this.http.post(this.URL_API + '/produtos', produto);
  }

  deletarProduto(produto) {
      return this.http.delete(this.URL_API + '/produtos/' + produto.id);
  }

  editarProduto(id, produto) {
      return this.http.patch(this.URL_API + '/produtos/' + id, produto);
  }
}
