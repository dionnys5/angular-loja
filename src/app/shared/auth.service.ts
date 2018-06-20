import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
    API_URL = 'http://localhost:3000';
    admin = null;
    cliente = null;

    authAdmin(login: string, senha: string): Observable<any[]> {
        const qs = 'nome=' + login + '&senha=' + senha;
        return this.http.get<any[]>(this.API_URL + '/administradores?' + qs);
    }

    authCliente(login: string, senha: string): Observable<any[]> {
        const qs = 'nome=' + login + '&senha=' + senha;
        return this.http.get<any[]>(this.API_URL + '/clientes?' + qs);
    }

    setAdmin(admin) {
        this.admin = admin;
    }

    setCliente(cliente) {
        this.cliente = cliente;
    }

    getAdmin() {
        return this.admin;
    }

    getCliente() {
        return this.cliente;
    }

    clearAdmin() {
        this.admin = null;
    }

    clearCliente() {
        this.cliente = null;
    }

    logoutAdmin() {
        this.clearAdmin();
    }

    logoutCliente() {
        this.clearCliente();
    }
}
