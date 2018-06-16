import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    API_URL = 'http://localhost:3000';
    user = null;

    authAdmin(login: string, senha: string): Observable<any[]> {
        const qs = 'nome=' + login + '&senha=' + senha;
        return this.http.get<any[]>(this.API_URL + '/usuarios?' + qs);
    }

    authCliente(login: string, senha: string): Observable<any[]> {
        const qs = 'nome=' + login + '&senha=' + senha;
        return this.http.get<any[]>(this.API_URL + '/clientes?' + qs);
    }

    set(user) {
        this.user = user;
    }

    get() {
        return this.user;
    }

    clear() {
        this.user = null;
    }

    logout() {
        this.clear();
    }
}
