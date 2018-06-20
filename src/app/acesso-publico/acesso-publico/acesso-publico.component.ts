import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-acesso-publico',
  templateUrl: './acesso-publico.component.html',
  styleUrls: ['./acesso-publico.component.css']
})
export class AcessoPublicoComponent implements OnInit {
  cliente = null;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.cliente = this.authService.getCliente();
  }

}
