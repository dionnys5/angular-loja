import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publico-login',
  templateUrl: './publico-login.component.html',
  styleUrls: ['./publico-login.component.css']
})
export class PublicoLoginComponent implements OnInit {

  nome = null;
  senha = null;
  nomeCadastro = null;
  sobrenomeCadastro = null;
  username = null;
  senhaCadastro = null;
  confirmSenha = null;
  erro = null;


  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

    entrar() {
        this.authService.authCliente(this.nome, this.senha)
            .subscribe(usuarios => {
                if (usuarios.length > 0) {
                    this.erro = null;
                    this.authService.setCliente(usuarios[0]);
                    this.router.navigate(['']);
                } else {
                    this.erro = 'Login ou senha incorretos';
                }
            });
    }

}
