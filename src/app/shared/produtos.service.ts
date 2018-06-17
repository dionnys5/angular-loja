import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

    URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  todosProdutos() {
      return this.http.get(this.URL_API + '/produtos');
  }

}
