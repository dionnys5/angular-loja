import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../shared/auth.service';

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


  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

}
